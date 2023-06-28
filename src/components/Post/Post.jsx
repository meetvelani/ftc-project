import "./Post.scss";
import ProfileImg from "../../assets/images/profile-picture.png";
import { SlOptions } from "react-icons/sl";
import { useRef } from "react";
import {
  MdFollowTheSigns,
  MdLocationOn,
  MdOutlineIosShare,
  MdPhone,
  MdSend,
} from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { RiSearchFill } from "react-icons/ri";
import { FaDownload, FaRegCommentDots, FaShare } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { ReactComponent as AgeIcon } from "../../assets/icons/age-icon.svg";
import { BsPersonCircle, BsPeopleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Viewer } from "@react-pdf-viewer/core";
import InputEmoji from "react-input-emoji";
import { ReplyBox } from "./components/ReplyBox";
import { CommentBox } from "./components/CommentBox";

const PDFViewer = ({ fileUrl }) => {
  const createFileUrl = (file) => {
    const blob = new Blob([file], { type: "application/pdf" });
    return URL.createObjectURL(blob);
  };

  const fileUrl1 = createFileUrl(fileUrl);
  return (
    <div>
      <Viewer fileUrl={fileUrl1} />
    </div>
  );
};

export const Post = ({ post }) => {
  const { pathname } = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [comments, setComments] = useState([
    { comment: "Comment show here" },
    { comment: "hello" },
    { comment: "hai" },
    { comment: "hello" },
  ]);

  const [commentsShow, setCommentsShow] = useState(false);
  const [reply, setReply] = useState(false);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleReplyShow = () => {
    setReply(!reply);
  };

  const handleSlideChange = (currentSlide, nextSlide) => {
    setActiveSlide(nextSlide);
  };

  const handleCommentsShow = () => {
    setCommentsShow(!commentsShow);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack className="slick-prev" />,
    nextArrow: <IoIosArrowForward className="slick-next" />,
    beforeChange: handleSlideChange,
  };

  return (
    <div className="post">
      <div className="head">
        <div className="left-side">
          <img src={post.dp ? post.dp : ProfileImg} alt="profile-img" />
          <div className="title-box">
            <span>{post.title ? post.title : post.name}</span>
            <span>8h ago</span>
          </div>
        </div>
        <SlOptions className="icon" />
      </div>
      <div className="post-details">
        <div className="description">
          <p className="text" id="descriptionText">
            {post.description}
          </p>
        </div>
        <div className="card-item">
          <div className="left-side-card">
            <span>Defaulter</span>
            <div className="lens-div">
              <RiSearchFill className="lens" />
              <BsPersonCircle className="person" />
            </div>
            {/* <div class="circle-container">
              <div class="outer-circle">
                <div class="inner-circle"></div>
                <div class="inner-circle"></div>
              </div>
              <div className="circle-handle"></div>
            </div> */}
            <button className="view-profile-btn">View Profile</button>
          </div>
          <div className="right-side-card">
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
        {pathname === "/" && (
          <div className="slider-div">
            <Slider {...settings} className="slider">
              {post.postItems.map((item, index) => {
                return (
                  <>
                    {item.type === "image" && (
                      <img
                        src={item.url}
                        key={item.url}
                        alt="image"
                        className="slider-item"
                        height="150px"
                        width="150px"
                      />
                    )}
                    {item.type === "video" && (
                      <div className="slider-item" key={post.url}>
                        <ReactPlayer
                          className="video-player"
                          url={`../../assets/video1.mp4`}
                          height="100%"
                          width="100%"
                          controls
                          playing={activeSlide === index}
                          autoplay={false}
                          volume={1}
                        />
                      </div>
                    )}
                    {item.type === "document" && (
                      <div className="slider-item" key={post.url}>
                        {/* <Viewer fileUrl={post.url} /> */}
                        <PDFViewer fileUrl={post.url} />
                      </div>
                    )}
                    {item.type === "audio" && (
                      <div className="slider-item" key={post.url}>
                        {/* <ReactPlayer
                          url={post.url}
                          height="150px"
                          width="100%"
                          controls
                          autoplay={false}
                        /> */}
                        <audio
                          src={post.url}
                          height="50px"
                          width="100%"
                          controls
                        ></audio>
                      </div>
                    )}
                  </>
                );
              })}
            </Slider>
          </div>
        )}
        <div className="chases-comments-count">
          <div className="box">
            <span>0</span>
            <span> Chases</span>
          </div>
          <div className="box">
            <span>{comments.length}</span>
            <span> Comments</span>
          </div>
        </div>
        <hr className="divider-line" />
        <div className="options">
          <div>
            <div className="item">
              <MdFollowTheSigns className="item-icon" />
              <span>Chase</span>
            </div>
            <div className="item" onClick={handleCommentsShow}>
              <FaRegCommentDots className="item-icon" />
              <span>Comments</span>
            </div>
            <div className="item">
              <FaShare className="item-icon" />
              <span>Share</span>
            </div>
            <div className="item">
              <MdOutlineIosShare className="item-icon" />
              <span>Send</span>
            </div>
          </div>
          <div>
            <div className="item">
              <BsPeopleFill className="item-icon" />
              <span>Debate</span>
            </div>
          </div>
        </div>
        <div className="comment-box">
          <img
            src={post.dp ? post.dp : ProfileImg}
            alt="dp"
            className="dp-img"
          />
          <div className="comment-input">
            <InputEmoji value={newMessage} onChange={handleChange} />
            <MdSend className="icon" />
          </div>
        </div>

        {commentsShow && (
          <div className="comments-div">
            {comments.map((item) => {
              return <CommentBox post={post} item={item} />;
            })}
          </div>
        )}

        {pathname !== "/" && (
          <button className="button-primary">View Post</button>
        )}
      </div>
    </div>
  );
};
