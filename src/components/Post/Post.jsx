import "./Post.scss";
import ProfileImg from "../../assets/images/profile-picture.png";
import { SlOptions } from "react-icons/sl";
import { useRef } from "react";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { ReactComponent as AgeIcon } from "../../assets/icons/age-icon.svg";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="head">
        <div className="left-side">
          <img src={ProfileImg} alt="profile-img" />
          <div className="title-box">
            <span>{post.title}</span>
            <span>8h ago</span>
          </div>
        </div>
        <SlOptions className="icon" />
      </div>
      <div className="post-details">
        <div className="description">
          <p className="text" id="descriptionText">
            {post.descr}
          </p>
        </div>
        <div className="card-item">
          <div className="left-side">
            <span>Defaulter</span>
            <div class="circle-container">
              <div class="outer-circle">
                <div class="inner-circle"></div>
                <div class="inner-circle"></div>
              </div>
              <div className="circle-handle"></div>
            </div>
            <button className="view-profile-btn">View Profile</button>
          </div>
          <div className="right-side">
            <div className="header-section">
              <div className="profile-info">
                <h2>Yash Panchal</h2>
                <div className="info-box">
                  <MdPhone className="icon" /> <span>+91 6847578728</span>
                </div>
                <div className="info-box">
                  <SiGmail className="icon" />{" "}
                  <span>yashpanchal@gmail.com</span>
                </div>
              </div>
              <div className="download-icon">
                <div className="icon-bg-round">
                  <FaDownload />
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <div className="item-box">
                <AgeIcon className="icon age-icon" /> <span>23</span>
              </div>
              <div className="item-box">
                <MdLocationOn className="icon" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="item-box position-box">
                <IoBagSharp className="icon" />
                <span>Web Developer at Technolab</span>
              </div>
            </div>
          </div>
        </div>
        <button className="btn">View Post</button>
      </div>
    </div>
  );
};
