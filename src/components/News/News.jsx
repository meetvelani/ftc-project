import "./News.scss";

export const News = () => {
  const news = [
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    // {
    //   news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    //   time: "15m ago",
    // },
    // {
    //   news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    //   time: "15m ago",
    // },
    // {
    //   news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    //   time: "15m ago",
    // },
  ];
  return (
    <div className="news">
      <div className="title">
          <div className="heading">
            <div className="online-icon"></div>
            <span>News</span>
          </div>
          <hr />
        </div>
      {/* <h3>News</h3> */}
      <ul className="list-items">
        {news.map((news, index) => (
          <div key={index} className="list-item">
            <li className="">{news.news}</li>
            <span>{news.time}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};
