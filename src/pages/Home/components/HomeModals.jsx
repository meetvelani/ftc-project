import Modal from "react-bootstrap/Modal";
import "./HomeModals.scss";
import { GrFormClose } from "react-icons/gr";
import { TbCameraPlus } from "react-icons/tb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Table } from "react-bootstrap";
import { ReactComponent as AddPhotoIcon } from "../../../assets/icons/add-photo.svg";
import { ReactComponent as AddDocIcon } from "../../../assets/icons/add-document.svg";
import { ReactComponent as AddMediaIcon } from "../../../assets/icons/add-media.svg";

export const CreatePostModal = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      pincode: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      aadharNo: "",
      pancardNo: "",
      paymentType: "",
      mobile: "",
      organization: "",
    },
  });
  const values = getValues();
  console.log(values, "values");

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
                <div className="default">
                  <TbCameraPlus className="default-img" />
                </div>
                {/* <img
                      src={
                        "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                      }
                      alt=""
                      className="added-img"
                    /> */}
                <span>Add Defaulter Photo</span>
              </div>
              <div className="form">
                <div className="input-box">
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name")}
                    defaultValue={getValues("name")}
                    name="name"
                    type="text"
                    placeholder="Name"
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
                      {...register("aadharNo")}
                      name="aadharNo"
                      type="tel"
                      placeholder="Aadhar No."
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="pancard-number">Pancard No.</label>
                    <input
                      {...register("pancardNo")}
                      name="pancardNo"
                      type="tel"
                      placeholder="Pancard No."
                    />
                  </div>
                </div>
                <div className="combined-3 combined">
                  <div className="input-box">
                    <label htmlFor="payment-type">Payment Type</label>
                    <input
                      {...register("paymentType")}
                      name="paymentType"
                      type="text"
                      placeholder="Payment type"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      {...register("mobile")}
                      name="mobile"
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
              <GrFormClose className="icon" size={25} onClick={props.onHide} />
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
                rows="10"
              ></textarea>
            </div>

            <div className="bottom-section">
              <div className="options">
                <div className="item">
                  <AddPhotoIcon className="icon"/>
                  <span>Add Photo</span>
                </div>
                <div className="item">
                  <AddMediaIcon className="icon"/>
                  <span>Add Media</span>
                </div>
                <div className="item">
                  <AddDocIcon className="icon"/>
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
