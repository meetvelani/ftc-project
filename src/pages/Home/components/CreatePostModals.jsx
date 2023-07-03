import Modal from "react-bootstrap/Modal";
import "./CreatePostModals.scss";
import { GrFormClose } from "react-icons/gr";
import { TbCameraPlus } from "react-icons/tb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Table } from "react-bootstrap";
import { ReactComponent as AddPhotoIcon } from "../../../assets/icons/add-photo.svg";
import { ReactComponent as AddDocIcon } from "../../../assets/icons/add-document.svg";
import { ReactComponent as AddMediaIcon } from "../../../assets/icons/add-media.svg";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Viewer } from "@react-pdf-viewer/core";
import ReactPlayer from "react-player";
import { FaMusic } from "react-icons/fa";

export const CreatePostModal = (props) => {
  const imgRef = useRef();
  const [profileImg, setProfileImg] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      defaulter_name: "",
      age: "",
      pincode: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      aadhar_number: "",
      pancard_number: "",
      payment_type: "",
      phone_number: "",
      organization: "",
    },
  });

  const handleProfileImgChange = (e) => {
    if (
      e.target.files[0].type === "image/x-png" ||
      "image/jpeg" ||
      "image/jpg"
    ) {
      const profileDp = e.target.files[0];
      return setProfileImg(URL.createObjectURL(profileDp));
    } else {
      return toast("Select an image file", {
        icon: "❌",
        position: "top-center",
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal"
      // animation={false}
    >
      <div className="modal-body">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="head">
              <h5>Enter defaulter details</h5>
              <div className="icon-div">
                <GrFormClose
                  className="icon"
                  size={25}
                  onClick={props.onHide}
                />
              </div>
            </div>

            <div className="form-section">
              <div className="add-img">
                {!profileImg ? (
                  <div
                    className="default"
                    onClick={() => imgRef.current.click()}
                  >
                    <TbCameraPlus className="default-img" />
                  </div>
                ) : (
                  <img src={profileImg} alt="" className="added-img" />
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  ref={imgRef}
                  hidden
                  onChange={handleProfileImgChange}
                />
                <span>Add Defaulter Photo</span>
              </div>
              <div className="form">
                <div className="input-box">
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("defaulter_name",{required:'Defaulter name required'})}
                    name="defaulter_name"
                    type="text"
                    placeholder="Defaulter Name"
                  />
                </div>
                <div className="combined-1 combined">
                  <div className="input-box">
                    <label htmlFor="age">Age</label>
                    <input
                      {...register("age")}
                      name="age"
                      type="tel"
                      placeholder="Age"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      {...register("pincode")}
                      name="pincode"
                      type="tel"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="input-box email">
                    <label htmlFor="email">Email</label>
                    <input
                      {...register("email")}
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="address">Address</label>
                  <input
                    {...register("address")}
                    name="address"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="combined-2 combined">
                  <div className="input-box">
                    <label htmlFor="city">City</label>
                    <input
                      {...register("city")}
                      name="city"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="state">State</label>
                    <input
                      {...register("state")}
                      name="state"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="country">Country</label>
                    <input
                      {...register("country")}
                      name="country"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="combined-3 combined">
                  <div className="input-box">
                    <label htmlFor="aadhar-number">Aadhar No.</label>
                    <input
                      {...register("aadhar_number")}
                      name="aadhar_number"
                      type="tel"
                      placeholder="Aadhar No."
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="pancard-number">Pancard No.</label>
                    <input
                      {...register("pancard_number")}
                      name="pancard_number"
                      type="tel"
                      placeholder="Pancard No."
                    />
                  </div>
                </div>
                <div className="combined-3 combined">
                  <div className="input-box">
                    <label htmlFor="payment-type">Payment Type</label>
                    <input
                      {...register("payment_type")}
                      name="payment_type"
                      type="text"
                      placeholder="Payment type"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      {...register("phone_number")}
                      name="phone_number"
                      type="tel"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="organization">Organization</label>
                  <input
                    {...register("organization")}
                    name="organization"
                    type="text"
                    placeholder="Organization"
                  />
                </div>
              </div>
              <div
                className="button-primary"
                onClick={() => {
                  props.onNext(true);
                  props.onHide();
                }}
              >
                Next
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export const ConfirmationModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal"
      // animation={false}
    >
      <div className="modal-body">
        <div className="content">
          <div className="head">
            <h5>Confirm the details</h5>
            <div className="icon-div">
              <GrFormClose className="icon" size={25} onClick={props.onHide} />
            </div>
          </div>
          <div className="table-content">
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Entity</th>
                  <th>You filled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Pranav </td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td></td>
                </tr>
                <tr>
                  <td>City</td>
                  <td></td>
                </tr>
                <tr>
                  <td>State</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Aadhar Number</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Pancard Number</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Payment Type</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <div className="buttons">
              <button className="button-primary" onClick={() => props.onEdit()}>
                Edit
              </button>
              <button className="button-primary" onClick={props.onConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const AddMoreDetailsModal = (props) => {
  const videoRef = useRef();
  const docRef = useRef();
  const photoRef = useRef();
  const audioRef = useRef();
  const [imgs, setImgs] = useState([]);
  const [docs, setDocs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

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
              // background: "#333",
              // color: "#fff",
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal"
      // animation={false}
    >
      <div className="modal-body">
        <div className="content">
          <div className="head">
            <h5>Add more details</h5>
            <div className="icon-div">
              <GrFormClose
                className="icon"
                size={25}
                onClick={() => {
                  props.onHide();
                  setVideos([]);
                  setAudios([]);
                  setDocs([]);
                  setImgs([]);
                }}
              />
            </div>
          </div>
          <hr />
          <div className="addmore-div">
            <div className="text-field">
              <textarea
                placeholder="Type something..."
                name="description"
                id=""
                cols="30"
                rows="6"
              ></textarea>
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
                          controls
                          autoplay={false}
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
              <button className="button-primary" onClick={props.onPost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
