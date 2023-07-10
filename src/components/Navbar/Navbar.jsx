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
import { useStateValue } from "../../StateProvider";
import { RiLoginBoxFill } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";

export const Navbar = () => {
  const { pathname } = useLocation();
  const [profileImg, setProfileImg] = useState(false);
  const navigate = useNavigate();
  const [{ userLoggedIn }, dispatch] = useStateValue();
  console.log(userLoggedIn, "LOG");

  const logout = () => {
    sessionStorage.clear();
    dispatch({ type: "SET_LOGIN_STATUS", status: false });
    navigate("/sign-in");
  };
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
          {pathname !== "/sign-up" && pathname !== "/sign-in" && (
            <div className="search-box">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          )}
        </div>
        <div className="navbar-options">
          {pathname !== "/sign-up" && pathname !== "/sign-in" && (
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
              {userLoggedIn ? (
                <div
                  className={`icon-box profile ${
                    pathname === "/view-profile" && "active"
                  }`}
                >
                  <Link className="underline-none" to={"/view-profile"}>
                    {profileImg ? (
                      <img src="" alt="" className="profile-img" />
                    ) : (
                      <BsPersonCircle className="option-icon" />
                    )}
                    <span>Me</span>
                  </Link>
                </div>
              ) : (
                <div className="icon-box">
                  <Link className="underline-none" to={"/sign-in"}>
                    <RiLoginBoxFill className="option-icon" />
                    <span>Sign in</span>
                  </Link>
                </div>
              )}
              <div className="logout-link">
                <span onClick={logout}>Sign out</span>
              </div>
              <div className="sm-logout-link">
                <SlLogout className="option-icon" onClick={logout} />
              </div>
            </>
          )}
          {pathname === "/sign-in" && (
            <Link to={"/sign-up"}>
              <button className="button-primary">Sign Up</button>
            </Link>
          )}
          {pathname === "/sign-up" && (
            <Link to={"/sign-in"}>
              <button className="button-primary">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
