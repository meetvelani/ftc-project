import Modal from "react-bootstrap/Modal";
import "./CreatePostModals.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../../apiCall";
import { useStateValue } from "../../../StateProvider";
import { FirstModal } from "./FirstModal";
import { SecondModal } from "./SecondModal";
import { ThirdModal } from "./ThirdModal";

export const CreatePostModal = (props) => {
  const queryClient = useQueryClient();
  const [modalPage, setModalPage] = useState(1);
  const [pincode, setPincode] = useState("");
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
      detail: "",
    },
  });

  const postUploadMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (response) => {
      if (response.data?.post_id) {
        quitCreatePost();
        queryClient.invalidateQueries("all-posts");
        toast.success(response.data?.status[0]?.ResponseMessage);
      } else {
        console.log(response, "response");
        toast.error("Post upload failed");
      }
      dispatch({ type: "SET_LOADING", status: false });
    },
    onError: (err) => {
      toast.error("Something went wrong");
      dispatch({ type: "SET_LOADING", status: false });
    },
  });

  const handleFormSubmit = (values) => {
    values = {
      ...values,
      pincode,
      city,
      state,
      country,
      phone_number: values.phone_number || 0,
      aadhar_number: values.aadhar_number || 0,
    };
    if (modalPage === 1) {
      dispatch({ type: "SET_CREATE_POST_DATA", data: values });
      setModalPage(2);
    }
    if (modalPage === 3) {
      dispatch({ type: "SET_LOADING", status: true });
      console.log("createPostData", createPostData);
      postUploadMutation.mutate(createPostData);
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
    setModalPage(1);
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
            {modalPage === 1 && (
              <FirstModal
                quitCreatePost={quitCreatePost}
                register={register}
                errors={errors}
                setModalPage={setModalPage}
                country={{ value: country, change: setCountry }}
                state={{ value: state, change: setState }}
                city={{ value: city, change: setCity }}
                pincode={{ value: pincode, change: setPincode }}
              >
                <button className="button-primary" type="submit">
                  Next
                </button>
              </FirstModal>
            )}
            {modalPage === 2 && <SecondModal setModalPage={setModalPage} />}
            {modalPage === 3 && (
              <>
                <ThirdModal setModalPage={setModalPage} register={register}>
                  <button
                    className="button-primary"
                    // onClick={postUpload}
                    type="submit"
                  >
                    Post
                  </button>
                </ThirdModal>
              </>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
};
