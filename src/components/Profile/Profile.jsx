import { MdLocationOn, MdPhone, MdMailOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { RiFile3Fill } from "react-icons/ri";
import ProfileImg from "../../assets/images/profile-picture.png";
import CoinImg from "../../assets/images/coins.png";
import EditIcon from "../../assets/images/edit-pic-icon.png";
import { Link } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="image">
          {/* <img src={ProfileImg} alt="profile" className="profile-img" /> */}
          <img
            src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
            alt="profile"
            className="profile-img"
          />
          <img src={EditIcon} alt="edit-icon" className="edit-icon" />
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
          <button className="button-primary">Buy more</button>
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
