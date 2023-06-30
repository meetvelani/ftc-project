import { MdLocationOn, MdPhone, MdMailOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { RiFile3Fill } from "react-icons/ri";
import ProfileImg from "../../assets/images/profile-picture.png";
import CoinImg from "../../assets/images/coins.png";
import EditIcon from "../../assets/images/edit-pic-icon.png";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";

export const Profile = () => {
  const imgRef = useRef();
  const [profileImg, setProfileImg] = useState("");
  const navigate = useNavigate();

  const handleProfileImgChange = (e) => {
    if (
      e.target.files[0].type === "image/x-png" ||
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg"
    ) {
      const profileDp = e.target.files[0];
      return setProfileImg(URL.createObjectURL(profileDp));
    } else {
      return toast("Select an image file", {
        icon: "❌",
        position: "top-center",
        style: {
          borderRadius: "10px",
        },
      });
    }
  };
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="image">
          {!profileImg ? (
            <div className="default">
              <TbCameraPlus className="default-img" />
            </div>
          ) : (
            <img src={profileImg} alt="" className="profile-img" />
          )}
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            ref={imgRef}
            hidden
            onChange={handleProfileImgChange}
          />
          <img
            src={EditIcon}
            alt="edit-icon"
            className="edit-icon"
            onClick={() => imgRef.current.click()}
          />
        </div>
        <div className="profile-info">
          <h2>Pranav Premanand</h2>
          <div className="location">
            <MdLocationOn className="icon" />
            <span> Tirur, Kerala, India</span>
          </div>
          <div className="phone">
            <MdPhone className="icon" /> <span>+91 6845752132</span>
          </div>
          <div className="mail">
            <MdMailOutline className="icon" /> <span>pranav@gmail.com</span>
          </div>
          <Link to={"/edit-profile"}>
            <button className="button-primary">Edit Profile</button>
          </Link>
        </div>
      </div>
      <div className="bottom-options">
        <div className="coin-box">
          <span className="my-coins">My coins</span>
          <div className="combined-box">
            <img src={CoinImg} className="icon" alt="coin" />
            <span className="total-coins">1200</span>
          </div>
          <button className="button-primary" onClick={() => navigate("/shop")}>
            Buy more
          </button>
        </div>
        <div className="saved-posts">
          <div className="combined-box">
            <RiFile3Fill className="icon" />
            <span className="saved-post-text">Saved Posts</span>
          </div>
          <button className="button-primary">View</button>
        </div>
      </div>
    </div>
  );
};
