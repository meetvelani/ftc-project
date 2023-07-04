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
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../../apiCall";
import { useStateValue } from "../../../StateProvider";

export const CreatePostModal = (props) => {
  const imgRef = useRef();
  const [profileImg, setProfileImg] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeErr, setPincodeErr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [{ createPostData }, dispatch] = useStateValue();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      defaulter_name: createPostData?.defaulter_name || "",
      age: createPostData?.age || "",
      // pincode: createPostData?.pincode || "",
      email: createPostData?.email || "",
      address: createPostData?.address || "",
      // city: createPostData?.city || "",
      // state: createPostData?.state || "",
      // country: createPostData?.country || "",
      aadhar_number: createPostData?.aadhar_number || "",
      pancard_number: createPostData?.pancard_number || "",
      payment_type: createPostData?.payment_type || "",
      phone_number: createPostData?.phone_number || "",
      organization: createPostData?.organization || "",
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

  const handleFormSubmit = (values) => {
    values = {
      ...values,
      pincode,
      city,
      state,
      country,
    };
    dispatch({ type: "SET_CREATE_POST_DATA", data: values });
    props.onNext(true);
    props.onHide();
  };

  const checkPincode = async (e) => {
    if (e.target.value.length === 0) {
      return setPincodeErr("Pincode is required");
    } else {
      setPincodeErr("");
    }
    if (!/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/.test(e.target.value)) {
      setCity("");
      setState("");
      setCountry("");
      return setPincodeErr("Pincode is invalid");
    } else {
      setPincodeErr("");
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${e.target.value}`
        );
        if (response.data[0].Status === "Success") {
          setPincode(e.target.value);
          setCity(response.data[0].PostOffice[0].Name);
          setState(response.data[0].PostOffice[0].State);
          setCountry(response.data[0].PostOffice[0].Country);
          setPincodeErr("");
        } else {
          setCity("");
          setState("");
          setCountry("");
          setPincodeErr("Pincode is invalid");
        }
      } catch (err) {}
    }
  };

  const checkRequiredFields = () => {
    if (city === "") {
      setPincodeErr("Pincode is required");
    }
  };

  const quitCreatePost = () => {
    dispatch({ type: "SET_CREATE_POST_DATA", data: {} });
    reset();
    setPincode("");
    setCity("");
    setState("");
    setCountry("");
    props.onHide();
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
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="head">
              <h5>Enter defaulter details</h5>
              <div className="icon-div">
                <GrFormClose
                  className="icon"
                  size={25}
                  onClick={quitCreatePost}
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
                  <div className="input-field">
                    <input
                      {...register("defaulter_name", {
                        required: "Defaulter name required",
                      })}
                      name="defaulter_name"
                      type="text"
                      placeholder="Defaulter Name"
                    />
                    <small className="error">
                      {errors.defaulter_name?.message}
                    </small>
                  </div>
                </div>

                <div className="combined-1 combined">
                  <div className="input-box">
                    <label htmlFor="age">Age</label>
                    <div className="input-field">
                      <input
                        {...register("age", {
                          required: "Age is required",
                          pattern: {
                            value: /^\d+$/,
                            message: "Only numbers allowed",
                          },
                        })}
                        name="age"
                        type="tel"
                        placeholder="Age"
                      />
                      <small className="error">{errors.age?.message}</small>
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="pincode">Pincode</label>
                    <div className="input-field">
                      <input
                        // {...register("pincode")}
                        name="pincode"
                        type="tel"
                        placeholder="Pincode"
                        onChange={checkPincode}
                        defaultValue={pincode}
                      />
                      <small className="error">
                        {pincodeErr}
                        {/* {errors.defaulter_name?.message} */}
                      </small>
                    </div>
                  </div>
                  <div className="input-box email">
                    <label htmlFor="email">Email</label>
                    <div className="input-field">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <small className="error">{errors.email?.message}</small>
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="address">Address</label>
                  <div className="input-field">
                    <input
                      {...register("address", {
                        // required: "Address is required",
                      })}
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                    <small className="error">{errors.address?.message}</small>
                  </div>
                </div>
                <div className="combined-2 combined">
                  <div className="input-box">
                    <label htmlFor="city">City</label>
                    <div className="input-field">
                      <input
                        // {...register("city")}
                        defaultValue={city}
                        name="city"
                        type="text"
                        placeholder="City"
                      />
                      {/* <small className="error">
                        {errors.defaulter_name?.message}
                      </small> */}
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="state">State</label>
                    <div className="input-field">
                      <input
                        // {...register("state")}
                        defaultValue={state}
                        name="state"
                        type="text"
                        placeholder="State"
                      />
                      {/* <small className="error">
                        {errors.defaulter_name?.message}
                      </small> */}
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="country">Country</label>
                    <div className="input-field">
                      <input
                        // {...register("country")}
                        defaultValue={country}
                        name="country"
                        type="text"
                        placeholder="Country"
                      />
                      <small className="error">
                        {/* {errors.defaulter_name?.message} */}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="combined-3 combined">
                  <div className="input-box">
                    <label htmlFor="aadhar-number">Aadhar No.</label>
                    <div className="input-field">
                      <input
                        {...register("aadhar_number", {
                          // required: "Aadhar No. is required",
                          pattern: {
                            value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/gm,
                            message: "Invalid format",
                          },
                        })}
                        name="aadhar_number"
                        type="tel"
                        placeholder="Aadhar No."
                      />
                      <small className="error">
                        {errors.aadhar_number?.message}
                      </small>
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="pancard-number">Pancard No.</label>
                    <div className="input-field">
                      <input
                        {...register("pancard_number", {
                          // required: "Pancard No. is required",
                          pattern: {
                            value: /[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                            message: "Invalid format",
                          },
                        })}
                        name="pancard_number"
                        type="tel"
                        placeholder="Pancard No."
                      />
                      <small className="error">
                        {errors.pancard_number?.message}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="combined-3 combined">
                  <div className="input-box">
                    <label htmlFor="payment-type">Payment Type</label>
                    <div className="input-field">
                      <input
                        {...register("payment_type", {
                          // required: "Payment type is required",
                        })}
                        name="payment_type"
                        type="text"
                        placeholder="Payment type"
                      />
                      <small className="error">
                        {errors.payment_type?.message}
                      </small>
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="mobile">Mobile</label>
                    <div className="input-field">
                      <input
                        {...register("phone_number", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^(\+91|\+91\-|0)?[456789]\d{9}$/,
                            message: "Phone number is not valid",
                          },
                        })}
                        name="phone_number"
                        type="tel"
                        placeholder="Mobile"
                      />
                      <small className="error">
                        {errors.phone_number?.message}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="organization">Organization</label>
                  <div className="input-field">
                    <input
                      {...register("organization", {
                        // required: "Organization is required",
                      })}
                      name="organization"
                      type="text"
                      placeholder="Organization"
                    />
                    <small className="error">
                      {errors.organization?.message}
                    </small>
                  </div>
                </div>
              </div>
              <button
                className="button-primary"
                // onClick={() => {
                //   props.onNext(true);
                //   props.onHide();
                // }}
                onClick={checkRequiredFields}
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export const ConfirmationModal = (props) => {
  const [{ createPostData }] = useStateValue();
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
                  <td>{createPostData?.defaulter_name}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{createPostData?.age}</td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td>{createPostData?.pincode}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{createPostData?.email}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{createPostData?.address}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{createPostData?.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{createPostData?.state}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{createPostData?.country}</td>
                </tr>
                <tr>
                  <td>Aadhar Number</td>
                  <td>{createPostData?.aadhar_number}</td>
                </tr>
                <tr>
                  <td>Pancard Number</td>
                  <td>{createPostData?.pancard_number}</td>
                </tr>
                <tr>
                  <td>Payment Type</td>
                  <td>{createPostData?.payment_type}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{createPostData?.phone_number}</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>{createPostData?.organization}</td>
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

  const postUploadMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (response) => {
      console.log(response.data, "RESPONSE");
      dispatch({ type: "SET_CREATE_POST_DATA", data: {} });
      if (response.data.post_id) {
        toast.success(response.data?.status[0]?.ResponseMessage);
      }
    },
    onError: (err) => {
      console.log(err, "Error");
      toast.error('Something went wrong')
    },
  });

  // Upload post
  const postUpload = () => {
    props.onPost();

    createPostData = { ...createPostData, detail };
    console.log(createPostData, "createPostData");
    postUploadMutation.mutate(createPostData);
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
                name="detail"
                id=""
                cols="30"
                rows="6"
                onChange={(e) => setDetail(e.target.value)}
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
              <button className="button-primary" onClick={postUpload}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
