import LogoImg from "../../assets/images/logo-img.ico";
import { BiSearch } from "react-icons/bi";
import { MdChat } from "react-icons/md";
import { TbBellFilled } from "react-icons/tb";
import { FaHome, FaBell } from "react-icons/fa";
import { BsFillChatLeftTextFill, BsPersonCircle } from "react-icons/bs";
import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [profileImg, setProfileImg] = useState(true);
  return (
    <div className="navbar">
      <div className="navbar-inner-box">
        <div className="logo-and-search">
          <Link className="underline-none" to={"/"}>
            <div className="logo">
              <span className="logo-text">FT</span>
              <img src={LogoImg} alt="logo" className="logo-img" />
            </div>
          </Link>
          <div className="search-box">
            <BiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-options">
          <div className="icon-box">
            <FaHome className="option-icon" />
            <span>Home</span>
          </div>
          <div className="icon-box">
            <MdChat className="option-icon" />
            <span>Messaging</span>
          </div>
          <div className="icon-box">
            <TbBellFilled className="option-icon" />
            <span>Notifications</span>
          </div>
          <div className="icon-box">
            <Link className="underline-none" to={"/view-profile"}>
              {profileImg ? (
                <img
                  src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                  alt=""
                  className="profile-img"
                />
              ) : (
                <BsPersonCircle className="option-icon" />
              )}
              <span>Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
