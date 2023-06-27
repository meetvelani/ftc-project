import { News } from "../../components/News/News";
import { Post } from "../../components/Post/Post";
import { Profile } from "../../components/Profile/Profile";
import "./ViewProfile.scss";

export const ViewProfile = () => {
  const posts = [
    {
      title: "Pranav declared Yash defaulter",
      description:
        "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim",
    },
    {
      title: "Pranav declared Yash defaulter",
      description:
        "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim",
    },
    {
      title: "Pranav declared Yash defaulter",
      description:
        "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim",
    },
  ];
  return (
    <div className="view-profile">
      <div className="inner-box">
        <div className="profile">
          <Profile />
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className="news">
          <News />
        </div>
      </div>
    </div>
  );
};
