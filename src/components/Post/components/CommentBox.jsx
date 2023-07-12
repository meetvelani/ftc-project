import { useState } from "react";
import { ReplyBox } from "./ReplyBox";

export const CommentBox = ({ post, item }) => {
  const [reply, setReply] = useState(false);
  
  const handleReplyShow = () => {
    setReply(!reply);
  };
  return (
    <div className="comment">
      <div className="comment-details">
        <img src={post?.dp} alt="" className="dp-img" />
        <div>
          <span>Pranav</span>
          <p>hello</p>
        </div>
      </div>
      <span onClick={handleReplyShow}>Reply</span>
      {reply && <ReplyBox />}
      {/* {reply && <ReplyBox post={post} />} */}
    </div>
  );
};
