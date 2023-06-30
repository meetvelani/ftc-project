import { useState } from "react";
import "./SignUp.scss";
import GoogleIcon from "../../assets/images/google.png";
import FacebookIcon from "../../assets/images/facebook.png";
import BgImage from "../../assets/images/sign-up-image.png";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TiTick, TiTimes } from "react-icons/ti";

export const SignUp = () => {
  const [today, setToday] = useState();
  const [gender, setGender] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [pincodeErr, setPincodeErr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passUppercase, setPassUppercase] = useState(true);
  const [passLowercase, setPassLowercase] = useState(true);
  const [passNumbers, setPassNumbers] = useState(true);
  const [passSpecialChars, setPassSetSpecialChars] = useState(true);
  const [passMinLength, setPassMinLength] = useState(true);
  const [passMaxLength, setPassMaxLength] = useState(true);
  const [initialPwValidationMsgs, setInitialPwValidationMsgs] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    setInitialPwValidationMsgs(true);
    setPassword(password);
    if (password !== "") {
      setPasswordErr("");
      if (password.match(/[A-Z]/) != null) {
        setPassUppercase(false);
      } else {
        setPassUppercase(true);
      }

      if (password.match(/[a-z]/) != null) {
        setPassLowercase(false);
      } else {
        setPassLowercase(true);
      }

      if (password.match(/[0-9]/) != null) {
        setPassNumbers(false);
      } else {
        setPassNumbers(true);
      }

      if (password.match(/[!@#$%^&*]/) != null) {
        setPassSetSpecialChars(false);
      } else {
        setPassSetSpecialChars(true);
      }

      if (password.length >= 6) {
        setPassMinLength(false);
      } else {
        setPassMinLength(true);
      }

      if (password.length <= 16) {
        setPassMaxLength(false);
      } else {
        setPassMaxLength(true);
      }
    } else {
      setPassUppercase(true);
      setPassLowercase(true);
      setPassNumbers(true);
      setPassSetSpecialChars(true);
      setPassMinLength(true);
      setPassMaxLength(true);
    }
  };

  const {
    register,
    reset,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      pincode: "",
      password: "",
      confirm_password: "",
    },
  });

  // Handle gender selection
  const handleGenderSelect = (str) => {
    setGenderErr("");
    if (str === "male") {
      setGender("male");
    } else {
      setGender("female");
    }
  };

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const todayDate = `${year}-${month}-${day}`;
    setToday(todayDate);
  }, []);

  // Do signup
  const doSignup = (values) => {
    console.log(values, "VALUES");
    navigate("/");
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
      return setPincodeErr("Pincode is invalid");
    } else {
      setPincodeErr("");
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${e.target.value}`
        );
        if (response.data[0].Status === "Success") {
          setCity(response.data[0].PostOffice[0].Name);
          setState(response.data[0].PostOffice[0].State);
          setPincodeErr("");
        } else {
          setCity("");
          setState("");
          setPincodeErr("Pincode is invalid");
        }
      } catch (err) {}
    }
  };

  const checkRequiredFields = () => {
    if (city === "") {
      setPincodeErr("Pincode is required");
    }
    if (gender === "") {
      setGenderErr("Gender is required");
    }
    if (
      (passLowercase ||
        passUppercase ||
        passMaxLength ||
        passMinLength ||
        passSpecialChars ||
        passNumbers) &&
      password !== ""
    ) {
      setPasswordErr("Invalid password");
    } else if (password === "") {
      setPasswordErr("Password is required");
    } else {
      setPasswordErr("");
    }
  };
  return (
    <div className="sign-up-container">
      <div className="inner-div">
        <div className="form-side">
          <form onSubmit={handleSubmit(doSignup)}>
            <h1>Sign up</h1>
            <div className="combined-input-div">
              <div className="input-box">
                <input
                  {...register("first_name", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "Must be greater than 2 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Must be less than 20 characters long",
                    },
                    pattern: {
                      value: /^[^-\s][a-zA-Z0-9_\s-]+$/,
                      message: "Entered format is not valid",
                    },
                  })}
                  type="text"
                  placeholder="First name"
                  name="first_name"
                />
                <small className="error">{errors.first_name?.message}</small>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  {...register("last_name", {
                    required: "Last name is required",
                    // minLength: {
                    //   value: 2,
                    //   message: "Must be greater than 2 characters long",
                    // },
                    maxLength: {
                      value: 20,
                      message: "Must be less than 20 characters long",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_\s-]+$/,
                      message: "Entered format is not valid",
                    },
                  })}
                />
                <small className="error">{errors.last_name?.message}</small>
              </div>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <small className="error">{errors.email?.message}</small>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="username"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-z0-9]+$/,
                    message: "Entered username is not valid",
                  },
                })}
              />
              <small className="error">{errors.username?.message}</small>
            </div>
            <div className="input-box">
              <input
                type="password"
                onChange={(e) => validatePassword(e.target.value)}
                placeholder="Password"
                name="password"
              />
              <small className="error">{passwordErr}</small>
              {/* <small className="error">{errors.password?.message}</small> */}
              {initialPwValidationMsgs && (
                <>
                  <small className={passMinLength ? "error" : "success"}>
                    {!passMinLength ? <TiTick /> : <TiTimes />} Must have at
                    least 6 characters
                  </small>

                  <small className={passMaxLength ? "error" : "success"}>
                    {!passMaxLength ? <TiTick /> : <TiTimes />} Must be below 16
                    characters
                  </small>

                  <small className={passLowercase ? "error" : "success"}>
                    {!passLowercase ? <TiTick /> : <TiTimes />} Must contain
                    lowercase
                  </small>

                  <small className={passUppercase ? "error" : "success"}>
                    {!passUppercase ? <TiTick /> : <TiTimes />} Must contain
                    uppercase
                  </small>

                  <small className={passSpecialChars ? "error" : "success"}>
                    {!passSpecialChars ? <TiTick /> : <TiTimes />} Must contain
                    special characters
                  </small>

                  <small className={passNumbers ? "error" : "success"}>
                    {!passNumbers ? <TiTick /> : <TiTimes />} Must contain
                    numbers
                  </small>
                </>
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm password"
                name="confirm_password"
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (val) => {
                    if (password !== val) {
                      return "Passwords do no match";
                    }
                  },
                })}
              />
              <small className="error">
                {errors.confirm_password?.message}
              </small>
            </div>
            <div className="gender-and-dob">
              <div className="gender-box">
                <div className="genders">
                  <div
                    className={`gender ${gender === "male" ? "selected" : ""}`}
                    onClick={() => handleGenderSelect("male")}
                  >
                    Male
                  </div>
                  <div
                    className={`gender ${
                      gender === "female" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelect("female")}
                  >
                    Female
                  </div>
                </div>
                <small className="error">{genderErr}</small>
              </div>
              <div className="dob-div">
                <div className="dob">
                  {/* {dateRef.current !== false && "mm/dd/yyy"} */}
                  <input
                    type="date"
                    name="date_of_birth"
                    max={today}
                    min="1950-01-01"
                    {...register("date_of_birth", {
                      required: "Date of birth is required",
                    })}
                    //   ref={dateRef}
                    //   hidden={dateRef}
                  />
                </div>
                <small className="error">{errors.date_of_birth?.message}</small>
              </div>
            </div>
            <div className="pincode-div">
              <div className="pincode-city-state">
                <div className="input-box">
                  <input
                    type="tel"
                    placeholder="Pincode"
                    name="pincode"
                    onChange={checkPincode}
                    //   {...register("pincode", { required: "Pincode is required" })}
                  />
                  <small className="sm-screen-view error">{pincodeErr}</small>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={city && city}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={state && state}
                  />
                </div>
              </div>
              <small className="lg-screen-view error">{pincodeErr}</small>
            </div>
            <div className="sign-up-buttons">
              {/* <Link to={"/"} className="underline-none"> */}
              <button
                className="button-primary"
                type="submit"
                onClick={checkRequiredFields}
              >
                Sign up
              </button>
              {/* </Link> */}
              <div className="sign-in-with">
                <img src={GoogleIcon} alt="google-icon" />
                <span>Sign in with google</span>
              </div>
              <div className="sign-in-with">
                <img src={FacebookIcon} alt="facebook-icon" />
                <span>Sign in with facebook</span>
              </div>
            </div>
          </form>
        </div>
        <div className="image-side">
          <img src={BgImage} alt="img" />
        </div>
      </div>
    </div>
  );
};
