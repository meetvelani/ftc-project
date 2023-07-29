import { Fragment, useState } from "react";
import "./Home.scss";
import { CreatePostModal } from "./components/CreatePostModals";
import { News } from "../../components/News/News";
import ProfileImg from "../../assets/images/profile-picture.png";
import SliderImg1 from "../../assets/images/postImg1.webp";
import SliderImg2 from "../../assets/images/postImg2.jpg";
import { Post } from "../../components/Post/Post";
import { toast } from "react-hot-toast";
import { useStateValue } from "../../StateProvider";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../apiCall";
import { Spinner } from "../../components/Spinner/Spinner";

export const Home = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showAddMoreModal, setShowAddMoreModal] = useState(false);
  // const [posts, setPosts] = useState([]);
  const [{ userLoggedIn }, dispatch] = useStateValue();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["all-posts"], getAllPosts, {
    getNextPageParam: (_lastPage, pages) => {
      // console.log(pages, "pages count");
      if (pages.length < pages[0]?.data?.posts?.total_pages) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  // console.log(hasNextPage, "hasNextPage");
  console.log(posts, "data");
  // console.log(error, "error");

  // Show modals if the user logged in
  const handleShowModal = () => {
    if (userLoggedIn) {
      return setShowFormModal(!showFormModal);
    }
    toast.error("Sign in to create post");
  };
  return (
    <div className="home-container">
      <div className="posts-section">
        <div className="create-post">
          <button className="button-primary" onClick={handleShowModal}>
            Create Post
          </button>
          <CreatePostModal
            show={showFormModal}
            onHide={() => setShowFormModal(false)}
            onNext={(status) => setShowConfirmationModal(status)}
          />
          {posts
            ? posts?.pages[0]?.data.posts.posts.length === 0 && (
                <h2>
                  There are no posts right now or check your internet connection
                </h2>
              )
            : null}
        </div>
        <div className="posts">
          {posts &&
            posts?.pages.map((group, index) => {
              return (
                <Fragment key={index}>
                  {group?.data?.posts?.posts?.map((post, index) => {
                    return <Post key={post.post_details.id} post={post} />;
                  })}
                </Fragment>
              );
            })}
          {posts && posts?.pages[0].data.posts.posts.length ? (
            <button
              className={`button-primary ${!hasNextPage && "disabled-btn"}`}
              onClick={fetchNextPage}
              disabled={!hasNextPage}
            >
              Load more
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="news-section">
        <News />
      </div>
    </div>
  );
};
