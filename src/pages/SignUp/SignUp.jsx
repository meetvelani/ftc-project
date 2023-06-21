import { useState } from "react";
import "./SignUp.scss";
import GoogleIcon from "../../assets/images/google.png";
import LinkedInIcon from "../../assets/images/linkedin.png";
import FacebookIcon from "../../assets/images/facebook.png";
import TwitterIcon from "../../assets/images/twitter.png";
import BgImage from "../../assets/images/sign-up-image.png";
import { useRef } from "react";
import { useEffect } from "react";

export const SignUp = () => {
  const [today, setToday] = useState();
  const [gender, setGender] = useState("");
  //   const dateRef = useRef(null);

  // Handle gender selection
  const handleGenderSelect = (str) => {
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

  return (
    <div className="sign-up-container">
      <div className="inner-div">
        <div className="form-side">
          <form action="">
            <h1>Sign up</h1>
            <div className="combined-input-div">
              <div className="input-box">
                <input type="text" placeholder="First name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm password" />
            </div>
            <div className="gender-and-dob">
              <div className="genders">
                <div
                  className={`gender ${
                    gender ==='male' ? "selected" : ""
                  }`}
                  onClick={() => handleGenderSelect("male")}
                >
                  Male
                </div>
                <div
                  className={`gender ${
                    gender ==='female' ? "selected" : ""
                  }`}
                  onClick={() => handleGenderSelect("female")}
                >
                  Female
                </div>
              </div>
              <div className="dob">
                {/* {dateRef.current !== false && "mm/dd/yyy"} */}
                <input
                  type="date"
                  name="dob"
                  max={today}
                  min="1950-01-01"
                  //   ref={dateRef}
                  //   hidden={dateRef}
                />
              </div>
            </div>
            <div className="pincode-city-state">
              <div className="input-box">
                <input type="text" placeholder="Pincode" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="City" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="State" />
              </div>
            </div>
            <div className="sign-up-buttons">
              <button className="btn">Sign up</button>
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
