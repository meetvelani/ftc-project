import { News } from "../../components/News/News";
import "./AdvanceSearch.scss";
import ProfileImg from "../../assets/images/profile-picture.png";
import { IoLocationSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AdvanceSearch = () => {
  const results = [0, 1, 2];
  return (
    <div className="advance-search">
      <div className="inner-container">
        <div className="search-side">
          <form action="">
            <div className="form-inputs">
              <div className="combined combined-2">
                <div className="input-box">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="input-box">
                  <input type="tel" placeholder="Pincode" />
                </div>
              </div>
              <div className="combined combined-4">
                <div className="input-box">
                  <input type="text" placeholder="City" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="State" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Country" />
                </div>
                <div className="input-box address-input">
                  <input type="text" placeholder="Address" />
                </div>
              </div>
              <div className="combined combined-3">
                <div className="input-box">
                  <input type="tel" placeholder="Aadhar Number" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="PAN" />
                </div>
                <div className="input-box">
                  <input type="tel" placeholder="Mobile Number" />
                </div>
              </div>
            </div>
            <button className="button-primary">Find</button>
          </form>
          <div className="search-results">
            {results.map((result) => {
              return (
                <div className="result-profile">
                  <div>
                    {/* <img src={ProfileImg} alt="profile-image" /> */}
                    <BsPersonCircle className="profile-icon" />
                    <div className="name-location">
                      <span>Pranav</span>
                      <div className="location">
                        <IoLocationSharp className="icon" />
                        <span>Tirur</span>
                      </div>
                    </div>
                  </div>
                  <Link to={"/view-profile"}>
                    <button className="button-primary">View Profile</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <News />
      </div>
    </div>
  );
};
