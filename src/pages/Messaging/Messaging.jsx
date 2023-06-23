import "./Messaging.scss";
import PersonalImg from "../../assets/images/personal.png";
import DebateImg from "../../assets/images/debate.png";
import { Link } from "react-router-dom";

export const Messaging = () => {
  return (
    <div className="messaging-container">
      <div className="inner-div">
        <Link className="underline-none">
          <div className="box">
            <img src={PersonalImg} alt="personal-chat" />
            <span>Personal Chat</span>
          </div>
        </Link>
        <Link className="underline-none">
          <div className="box">
            <img src={DebateImg} alt="personal-chat" />
            <span>Debate</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
