import { useState } from "react";
import "./SignIn.scss";
import GoogleIcon from "../../assets/images/google.png";
import LinkedInIcon from "../../assets/images/linkedin.png";
import FacebookIcon from "../../assets/images/facebook.png";
import TwitterIcon from "../../assets/images/twitter.png";
import BgImage from "../../assets/images/sign-in-image.png";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const doSignin = (e) => {
    e.preventDefault()
    navigate("/");
  };
  return (
    <div className="sign-in-container">
      <div className="inner-div">
        <div className="form-side">
          <form onSubmit={doSignin}>
            <h1>Sign in</h1>
            <div className="input-box">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Enter your password"
              />
            </div>
            <div className="show-pass-text">
              <input
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show password</span>
            </div>
            <span className="forgot-password-text">Forgot password?</span>
            <button type="submit" className="sign-in-btn">Sign in</button>
          </form>
          <span className="or">OR</span>
          <div className="social-media-icons">
            <div className="icon-box">
              <img src={GoogleIcon} alt="google-icon" />
            </div>
            <div className="icon-box">
              <img src={FacebookIcon} alt="facebook-icon" />
            </div>
            <div className="icon-box">
              <img src={LinkedInIcon} alt="linkedin-icon" />
            </div>
            <div className="icon-box">
              <img src={TwitterIcon} alt="twitter-icon" />
            </div>
          </div>
        </div>
        <div className="image-side">
          <img src={BgImage} alt="img" />
        </div>
      </div>
    </div>
  );
};
