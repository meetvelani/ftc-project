export const NotificationItem = ({ data }) => {
  return (
    <div className="list-item">
      <span className="dot"></span>
      <div className="details">
        <span className="title">{data.title}</span>
        <small>{data.date}</small>
      </div>
    </div>
  );
};
