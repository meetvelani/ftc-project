import { useState } from "react";
import "./Home.scss";
import {
  AddMoreDetailsModal,
  ConfirmationModal,
  CreatePostModal,
} from "./components/HomeModals";
import { News } from "../../components/News/News";

export const Home = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showAddMoreModal, setShowAddMoreModal] = useState(false);
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
            }}
          />
          <h2>
            There are no posts right now or check your internet connection
          </h2>
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
