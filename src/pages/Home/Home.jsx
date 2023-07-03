import { useState } from "react";
import "./Home.scss";
import {
  AddMoreDetailsModal,
  ConfirmationModal,
  CreatePostModal,
} from "./components/HomeModals";
import { News } from "../../components/News/News";
import ProfileImg from "../../assets/images/profile-picture.png";
import SliderImg1 from "../../assets/images/postImg1.webp";
import SliderImg2 from "../../assets/images/postImg2.jpg";
import { Post } from "../../components/Post/Post";
import { toast } from "react-hot-toast";

export const Home = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showAddMoreModal, setShowAddMoreModal] = useState(false);

  const posts = [
    {
      dp: ProfileImg,
      name: "Pranav",
      description: "Good morning",
      postItems: [
        { url: SliderImg1, type: "image" },
        { url: SliderImg2, type: "image" },
      ],
    },
    {
      dp: ProfileImg,
      name: "Pranav",
      description: "Good morning",
      postItems: [
        // { url: video1, type: "video" },
        // { url: video2, type: "video" },
        // { url: video3, type: "video" },
      ],
    },
    {
      dp: ProfileImg,
      name: "Pranav",
      description: "Good morning",
      postItems: [
        // { url: pdf1, type: "document" },
        // { url: pdf2, type: "document" },
      ],
    },
    {
      dp: ProfileImg,
      name: "Pranav",
      description: "Good morning",
      postItems: [
        // { url: audio, type: "audio" },
        // { url: audio, type: "audio" },
      ],
    },
  ];

  const uploadPost = ()=>{
    toast.success('Post uploaded')
  }
  return (
    <div className="home-container">
      <div className="posts-section">
        <div className="create-post">
          <button
            className="button-primary"
            onClick={() => setShowFormModal(!showFormModal)}
          >
            Create Post
          </button>
          <CreatePostModal
            show={showFormModal}
            onHide={() => setShowFormModal(false)}
            onNext={(status) => setShowConfirmationModal(status)}
          />
          <ConfirmationModal
            show={showConfirmationModal}
            onHide={() => {
              setShowConfirmationModal(false);
              setShowFormModal(true);
            }}
            onEdit={() => {
              setShowConfirmationModal(false);
              setShowFormModal(true);
            }}
            onConfirm={() => {
              setShowAddMoreModal(true);
            }}
          />
          <AddMoreDetailsModal
            show={showAddMoreModal}
            onHide={() => {
              setShowConfirmationModal(true);
              setShowAddMoreModal(false);
            }}
            onPost={() => {
              setShowConfirmationModal(false);
              setShowAddMoreModal(false);
              uploadPost()
            }}
          />
          {posts.length === 0 && (
            <h2>
              There are no posts right now or check your internet connection
            </h2>
          )}
        </div>
        <div className="posts">
          {posts.map((post,index) => {
            return <Post post={post} key={index}/>;
          })}
        </div>
      </div>
      <div className="news-section">
        {/* <div className="news-list"> */}
        {/* <span>There's nothing to display</span> */}
        <News />
        {/* </div> */}
      </div>
    </div>
  );
};
