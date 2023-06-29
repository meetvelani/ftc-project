import "./Messaging.scss";
import PersonalImg from "../../assets/images/personal.png";
import DebateImg from "../../assets/images/debate.png";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export const Messaging = () => {
  return (
    <div className="messaging-container">
      <div className="inner-div">
        <div className="content">
          <Link to={'/chat'} className="underline-none">
            <div className="box">
              <img
                src={PersonalImg}
                alt="personal-chat"
                className="chat-image"
              />
              <span>Personal Chat</span>
            </div>
          </Link>
          <Link to={'/chat'} className="underline-none">
            <div className="box">
              <img src={DebateImg} alt="personal-chat" className="chat-image" />
              <span>Debate</span>
            </div>
          </Link>
        </div>
        <div className="chats">
          <span className="start-debate-text">Start a Debate</span>
          <div className="chat-list">
            <Link to={"/chat"} className="underline-none chat-box">
              {/* <div className="chat-box"> */}
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
              {/* </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
