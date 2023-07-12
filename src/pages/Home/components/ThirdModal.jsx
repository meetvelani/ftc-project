import { GrFormClose } from "react-icons/gr";
import { ReactComponent as AddPhotoIcon } from "../../../assets/icons/add-photo.svg";
import { ReactComponent as AddDocIcon } from "../../../assets/icons/add-document.svg";
import { ReactComponent as AddMediaIcon } from "../../../assets/icons/add-media.svg";
import { FaMusic } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { createPost } from "../../../apiCall";
import { useMutation } from "@tanstack/react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { Viewer } from "@react-pdf-viewer/core";

export const ThirdModal = ({ setModalPage, children, register }) => {
  const videoRef = useRef();
  const docRef = useRef();
  const photoRef = useRef();
  const audioRef = useRef();
  const [imgs, setImgs] = useState([]);
  const [docs, setDocs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [detail, setDetail] = useState("");
  let [{ createPostData }, dispatch] = useStateValue();

  // Selecting images
  const onImageSelect = (file) => {
    setDocs([]);
    setVideos([]);
    setAudios([]);
    const allPhotos = Object.values(file.target.files);
    if (file.target.files && file.target.files[0]) {
      const images = allPhotos.map((file) => {
        if (
          file.type === "image/x-png" ||
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg"
        ) {
          let img = file;
          return { url: URL.createObjectURL(img) };
        } else {
          return toast("Select an image file", {
            icon: "❌",
            position: "top-center",
            style: {
              borderRadius: "10px",
            },
          });
        }
      });
      setImgs(images);
    }
  };

  // Selecting PDF documents
  const onDocumentSelect = (docs) => {
    setImgs([]);
    setVideos([]);
    setAudios([]);
    if (docs.target.files[0].type === "application/pdf") {
      const allDocs = Object.values(docs.target.files);
      if (docs.target.files && docs.target.files[0]) {
        const documents = allDocs.map((file) => {
          let doc = file;
          return { url: URL.createObjectURL(doc) };
        });
        setDocs(documents);
      }
    } else {
      return toast("Select a PDF file", {
        icon: "❌",
        position: "top-center",
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  // Selecting audios
  const onAudioSelect = (audio) => {
    setImgs([]);
    setVideos([]);
    setDocs([]);
    console.log(audio, "AUDIO FILES");
    const allFiles = Object.values(audio.target.files);
    if (audio.target.files && audio.target.files[0]) {
      const audioFiles = allFiles.map((file) => {
        if (
          file.type === "audio/mp3" ||
          file.type === "audio/wma" ||
          file.type === "audio/aac" ||
          file.type === "audio/mpeg" ||
          file.type === "audio/flac"
        ) {
          let aud = file;
          return { url: URL.createObjectURL(aud) };
        } else {
          return toast("Select an audio file", {
            icon: "❌",
            position: "top-center",
            style: {
              borderRadius: "10px",
            },
          });
        }
      });
      setAudios(audioFiles);
    }
  };

  // Selecting video files
  const onVideosSelect = (videoFiles) => {
    setImgs([]);
    setDocs([]);
    const allVideos = Object.values(videoFiles.target.files);
    if (videoFiles.target.files && videoFiles.target.files[0]) {
      const urlsToDisplay = allVideos.map((file) => {
        if (
          file.type === "video/mp4" ||
          file.type === "video/3gp" ||
          file.type === "video/mpeg"
        ) {
          let data = file;
          return { url: URL.createObjectURL(data), type: file.type };
        } else {
          return toast("Select only audio/video file", {
            icon: "❌",
            position: "top-center",
            style: {
              borderRadius: "10px",
            },
          });
        }
      });
      setVideos(urlsToDisplay);
    }
  };

  const handleSlideChange = (currentSlide, nextSlide) => {
    setActiveSlide(nextSlide);
  };

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack className="slick-prev" />,
    nextArrow: <IoIosArrowForward className="slick-next" />,
    beforeChange: handleSlideChange,
  };

//   const postUploadMutation = useMutation({
//     mutationFn: createPost,
//     onSuccess: (response) => {
//       console.log(response.data, "RESPONSE");
//       dispatch({ type: "SET_CREATE_POST_DATA", data: {} });
//       if (response.data.post_id) {
//         toast.success(response.data?.status[0]?.ResponseMessage);
//       }
//     },
//     onError: (err) => {
//       console.log(err, "Error");
//       toast.error("Something went wrong");
//     },
//   });

//   // Upload post
//   const postUpload = () => {
//     // props.onPost();

//     createPostData = { ...createPostData, detail };
//     console.log(createPostData, "createPostData");
//     postUploadMutation.mutate(createPostData);
//   };

  const handleClosePage = () => {
    setVideos([]);
    setAudios([]);
    setDocs([]);
    setImgs([]);
    setModalPage(2);
  };
  return (
    <>
      <div className="head">
        <h5>Add more details</h5>
        <div className="icon-div">
          <GrFormClose className="icon" size={25} onClick={handleClosePage} />
        </div>
      </div>
      <hr />
      <div className="addmore-div">
        <div className="text-field">
          <textarea
            placeholder="Type something..."
            name="detail"
            id=""
            cols="30"
            rows="6"
            {...register("detail")}
            // onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        {imgs.length !== 0 && (
          <div className="slider">
            <Slider {...settings} className="slider">
              {imgs.map((img) => (
                <img
                  src={img.url}
                  key={img.url}
                  alt="image"
                  className="slider-item"
                />
              ))}
            </Slider>
          </div>
        )}

        {docs.length !== 0 && (
          <div className="slider">
            <Slider {...settings} className="slider">
              {docs.map((doc) => {
                return (
                  <div className="slider-item" key={doc.url}>
                    <Viewer fileUrl={doc.url} />;
                  </div>
                );
              })}
            </Slider>
          </div>
        )}

        {videos.length !== 0 && (
          <div className="slider">
            <Slider {...settings} className="slider">
              {videos.map((data, index) => {
                return (
                  <div className="slider-item" key={data.url}>
                    <ReactPlayer
                      url={data.url}
                      height="100%"
                      width="100%"
                      controls
                      playing={activeSlide === index}
                      autoplay={false}
                      volume={0}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        )}

        {audios.length !== 0 && (
          <div className="slider">
            <Slider {...settings} className="slider">
              {audios.map((data, index) => {
                return (
                  <div className="slider-item" key={data.url}>
                    <ReactPlayer
                      url={data.url}
                      height="150px"
                      width="100%"
                      playing={activeSlide === index}
                      controls
                      autoplay={false}
                    //   volume={0}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
        <div className="bottom-section">
          <div className="options">
            <input
              type="file"
              ref={photoRef}
              multiple
              accept="image/x-png,image/jpeg,image/jpg,image/png"
              onChange={(e) => onImageSelect(e)}
              hidden
            />
            <input
              type="file"
              ref={videoRef}
              multiple
              accept="video/mp4,video/3gp,video/mpeg"
              onChange={(e) => onVideosSelect(e)}
              hidden
            />
            <input
              type="file"
              ref={docRef}
              multiple
              accept="application/pdf"
              onChange={(e) => onDocumentSelect(e)}
              hidden
            />
            <input
              type="file"
              ref={audioRef}
              multiple
              accept="audio/flac,
                  audio/mp3,
                  audio/wma,
                  audio/aac"
              onChange={(e) => onAudioSelect(e)}
              hidden
            />
            <div className="item" onClick={() => photoRef.current.click()}>
              <AddPhotoIcon className="icon-img" />
              <span>Add Photo</span>
            </div>
            <div className="item" onClick={() => videoRef.current.click()}>
              <AddMediaIcon className="icon-img" />
              <span>Add Video</span>
            </div>
            <div className="item" onClick={() => audioRef.current.click()}>
              <FaMusic className="icon" />
              <span>Add Audio</span>
            </div>
            <div className="item" onClick={() => docRef.current.click()}>
              <AddDocIcon className="icon-img" />
              <span>Add Document</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
