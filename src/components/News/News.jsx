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
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
    {
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      time: "15m ago",
    },
  ];
  return (
    <div className="news">
      <h3>News</h3>
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
