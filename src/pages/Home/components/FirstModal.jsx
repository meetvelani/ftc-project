import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { GrFormClose } from "react-icons/gr";
import { TbCameraPlus } from "react-icons/tb";

export const FirstModal = ({
  quitCreatePost,
  register,
  errors,
  setModalPage,
  children,
  country,
  state,
  city,
  pincode,
}) => {
  const [profileImg, setProfileImg] = useState("");
  const imgRef = useRef();
  const [pincodeErr, setPincodeErr] = useState("");

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

  const checkPincode = async (e) => {
    if (e.target.value.length === 0) {
      return setPincodeErr("Pincode is required");
    } else {
      setPincodeErr("");
    }
    if (!/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/.test(e.target.value)) {
      city.change("");
      state.change("");
      country.change("");
      return setPincodeErr("Pincode is invalid");
    } else {
      setPincodeErr("");
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${e.target.value}`
        );
        if (response.data[0].Status === "Success") {
          pincode.change(e.target.value);
          city.change(response.data[0].PostOffice[0].Name);
          state.change(response.data[0].PostOffice[0].State);
          country.change(response.data[0].PostOffice[0].Country);
          setPincodeErr("");
        } else {
          city.change("");
          state.change("");
          country.change("");
          setPincodeErr("Pincode is invalid");
        }
      } catch (err) {}
    }
  };
  return (
    <>
      <div className="head">
        <h5>Enter defaulter details</h5>
        <div className="icon-div">
          <GrFormClose className="icon" size={25} onClick={quitCreatePost} />
        </div>
      </div>

      <div className="form-section">
        <div className="add-img">
          {!profileImg ? (
            <div className="default" onClick={() => imgRef.current.click()}>
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
              <small className="error">{errors.defaulter_name?.message}</small>
            </div>
          </div>

          <div className="combined-1 combined">
            <div className="input-box">
              <label htmlFor="age">Age</label>
              <div className="input-field">
                <input
                  {...register("age", {
                    // required: "Age is required",
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
                  defaultValue={pincode.value}
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
                    // required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
                  defaultValue={city.value}
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
                  defaultValue={state.value}
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
                  defaultValue={country.value}
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
                <small className="error">{errors.aadhar_number?.message}</small>
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
                <small className="error">{errors.payment_type?.message}</small>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="mobile">Mobile</label>
              <div className="input-field">
                <input
                  {...register("phone_number", {
                    // required: "Phone number is required",
                    pattern: {
                      value: /^(\+91|\+91\-|0)?[456789]\d{9}$/,
                      message: "Phone number is not valid",
                    },
                  })}
                  name="phone_number"
                  type="tel"
                  placeholder="Mobile"
                />
                <small className="error">{errors.phone_number?.message}</small>
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
              <small className="error">{errors.organization?.message}</small>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
