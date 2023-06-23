import LogoImg from "../../assets/images/logo-img.ico";
import { BiSearch } from "react-icons/bi";
import { MdChat } from "react-icons/md";
import { TbBellFilled } from "react-icons/tb";
import { FaHome, FaBell } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { BsFillChatLeftTextFill, BsPersonCircle } from "react-icons/bs";
import "./Navbar.scss";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const [profileImg, setProfileImg] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(
    pathname !== "/sign-in" || "/sign-up" ? true : false
  );
  const navigate = useNavigate();
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
          {userLoggedIn && (
            <div className="search-box">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          )}
        </div>
        <div className="navbar-options">
          {userLoggedIn ? (
            <>
              <div className={`icon-box ${pathname === "/" && "active"}`}>
                <Link to={"/"} className="underline-none">
                  <FaHome className="option-icon" />
                  <span>Home</span>
                </Link>
              </div>
              <div
                className={`icon-box ${pathname === "/messaging" && "active"}`}
              >
                <Link to={"/messaging"} className="underline-none">
                  <MdChat className="option-icon" />
                  <span>Messaging</span>
                </Link>
              </div>
              <div
                className={`icon-box ${
                  pathname === "/notifications" && "active"
                }`}
              >
                <Link to={"/notifications"} className="underline-none">
                  <TbBellFilled className="option-icon" />
                  <span>Notifications</span>
                </Link>
              </div>

              <div
                className={`icon-box ${pathname === "/shop" && "active"}`}
                onClick={() => navigate("/shop")}
              >
                <Link to={"/shop"} className="underline-none">
                  <IoIosBasket className="option-icon" />
                  <span>Shop</span>
                </Link>
              </div>
              <div
                className={`icon-box ${
                  pathname === "/view-profile" && "active"
                }`}
              >
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
            </>
          ) : pathname === "/sign-in" ? (
            <Link to={"/sign-up"}>
              <button className="button-primary">Sign Up</button>
            </Link>
          ) : (
            <Link to={"/sign-in"}>
              <button className="button-primary">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
