import { TbBellFilled } from "react-icons/tb";
import "./Notifications.scss";
import { NotificationItem } from "./components/NotificationItem";
import { News } from "../../components/News/News";

export const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="inner-container">
        <div className="notifications">
          <div className="header">
            <TbBellFilled className="icon" />
            <span>Notifications</span>
          </div>
          <div className="notifications-list">
            <NotificationItem />
          </div>
        </div>
        <div className="news-component">
          <News />
        </div>
      </div>
    </div>
  );
};
