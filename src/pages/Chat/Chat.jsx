import { BiSearch } from "react-icons/bi";
import { News } from "../../components/News/News";
import "./Chat.scss";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import InputEmoji from "react-input-emoji";

export const Chat = () => {
  const [replyComment, setReplyComment] = useState("");

  const handleChange = (replyComment) => {
    setReplyComment(replyComment);
  };
  return (
    <div className="chat-container">
      <div className="inner-container">
        <div className="chat-side">
          <div className="message-list">
            <div className="header">
              <span>Messaging</span>
            </div>
            <div className="search-box">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="messages">
              <div className="chat-box">
                {/* <img
              src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
              alt="profile-image"
              className="profile-img"
            /> */}
                <div className="profile">
                  <BsPersonCircle className="profile-icon" />
                </div>
                <div className="name-section">
                  <span className="name">Name</span>
                  <span>message...,</span>
                </div>
              </div>
              <div className="chat-box">
                {/* <img
              src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
              alt="profile-image"
              className="profile-img"
            /> */}
                <div className="profile">
                  <BsPersonCircle className="profile-icon" />
                </div>
                <div className="name-section">
                  <span className="name">Name</span>
                  <span>message...,</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-section">
            <div className="person-who-chat">
              {/* <img
              src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
              alt="profile-image"
              className="profile-img"
            /> */}
              <div className="profile">
                <BsPersonCircle className="profile-icon" />
              </div>
              <div className="name-section">
                <span className="name">Name</span>
                <span>View Profile</span>
              </div>
            </div>
            <div className="chat-messages">
              <div className="messaging">
                <div className="right">
                  <span>
                    message.... Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Consequuntur qui veritatis ab placeat.
                    Provident alias obcaecati odit officia esse et optio nobis
                    magni quidem consequatur, accusamus id? Autem, cumque modi!
                  </span>
                  <small>June 29, 2023, 7:17 am</small>
                </div>
                <div className="left">
                  <span>message....</span>
                  <small>June 29, 2023, 7:17 am</small>
                </div>
                <div className="right">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur qui veritatis ab placeat. Provident alias
                    obcaecati odit officia esse et optio nobis magni quidem
                    consequatur, accusamus id? Autem, cumque modi!
                  </span>
                  <small>June 29, 2023, 7:17 am</small>
                </div>
                <div className="left">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur qui veritatis ab placeat. Provident alias
                    obcaecati odit officia esse et optio nobis magni quidem
                    consequatur, accusamus id? Autem, cumque modi!
                  </span>
                  <small>June 29, 2023, 7:17 am</small>
                </div>
              </div>
              <div className="input-box ">
                <InputEmoji value={replyComment} onChange={handleChange} />
                <MdSend className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="news-side">
          <News />
        </div>
      </div>
    </div>
  );
};
