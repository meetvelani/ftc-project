import { TbBellFilled } from "react-icons/tb";
import "./Notifications.scss";
import { NotificationItem } from "./components/NotificationItem";
import { News } from "../../components/News/News";
import EmptyNotifications from "../../assets/images/empty-notifications.png";

export const Notifications = () => {
  const notifications = [
    // { title: "Pranav chased on post Id 001", date: "June 24, 2023, 8:00 pm" },
    // { title: "Pranav chased on post Id 001", date: "June 24, 2023, 8:00 pm" },
    // { title: "Pranav chased on post Id 001", date: "June 24, 2023, 8:00 pm" },
  ];
  return (
    <div className="notifications-container">
      <div className="inner-container">
        <div className="notifications">
          <div className="header">
            <TbBellFilled className="icon" />
            <span>Notifications</span>
          </div>
          {notifications.length !== 0 ? (
            <div className="notifications-list">
              {notifications.map((data) => {
                return <NotificationItem data={data} />;
              })}
            </div>
          ) : (
            <div className="empty-page">
              <div className="image">
                {/* <h4>Empty Notifications</h4> */}
                <img src={EmptyNotifications} alt="empty-notifications" />
              </div>
            </div>
          )}
        </div>
        <div className="news-component">
          <News />
        </div>
      </div>
    </div>
  );
};
