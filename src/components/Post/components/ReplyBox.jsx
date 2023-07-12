import { useState } from "react";
import { MdSend } from "react-icons/md";
import InputEmoji from "react-input-emoji";

export const ReplyBox = ({ post }) => {
  const [replyComment, setReplyComment] = useState("");
  
  const handleChange = (replyComment) => {
    setReplyComment(replyComment);
  };
  return (
    <div className="comment-box">
      <img src={post?.dp} alt="dp" className="dp-img" />
      <div className="comment-input ">
        <InputEmoji value={replyComment} onChange={handleChange} />
        <MdSend className="icon" />
      </div>
    </div>
  );
};
