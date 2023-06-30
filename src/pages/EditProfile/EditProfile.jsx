import "./EditProfile.scss";
import { BsPerson } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import {
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdMailOutline,
} from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import EditIcon from "../../assets/images/edit-pic-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export const EditProfile = () => {
  const [today, setToday] = useState();
  const [edit, setEdit] = useState({
    fname: false,
    lname: false,
    mobile: false,
    email: false,
    dob: false,
    city: false,
  });

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const todayDate = `${year}-${month}-${day}`;
    setToday(todayDate);
  }, []);

  const updateProfile = (e)=>{
    e.preventDefault()
    toast.success('Profile updated')
  }
  return (
    <div className="edit-profile">
      <form className="inner-div" onSubmit={updateProfile}>
        <div className="image-section">
          <div className="image">
            <img
              src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
              alt="profile"
              className="profile-img"
            />
            <img src={EditIcon} alt="edit-icon" className="edit-icon" />
          </div>
          <button className="button-primary" type="submit">Update Profile</button>
        </div>
        <div className="form">
          <div className="input-box">
            <div className="label">
              <BsPerson className="icon" />
              <span>First Name</span>
            </div>
            <div className={`input-field ${edit.fname && "enable-edit"}`}>
              <input type="text" disabled={!edit.fname} />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, fname: true })}
              />
            </div>
          </div>

          <div className="input-box">
            <div className="label">
              <BsPerson className="icon" />
              <span>Last Name</span>
            </div>
            <div className={`input-field ${edit.lname && "enable-edit"}`}>
              <input type="text" disabled={!edit.lname} />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, lname: true })}
              />
            </div>
          </div>

          <div className="input-box">
            <div className="label">
              <MdOutlineLocalPhone className="icon" />
              <span>Mobile Number</span>
            </div>
            <div className={`input-field ${edit.mobile && "enable-edit"}`}>
              <input type="tel" disabled={!edit.mobile} />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, mobile: true })}
              />
            </div>
          </div>

          <div className="input-box">
            <div className="label">
              <MdMailOutline className="icon" />
              <span>Email</span>
            </div>
            <div className={`input-field ${edit.email && "enable-edit"}`}>
              <input type="email" disabled={!edit.email} />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, email: true })}
              />
            </div>
          </div>

          <div className="input-box">
            <div className="label">
              <SlCalender className="icon" />
              <span>Date of Birth</span>
            </div>
            <div className={`input-field ${edit.dob && "enable-edit"}`}>
              <input
                type="date"
                disabled={!edit.dob}
                min="1950-01-01"
                max={today}
              />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, dob: true })}
              />
            </div>
          </div>

          <div className="input-box">
            <div className="label">
              <MdOutlineLocationOn className="icon" />
              <span>City</span>
            </div>
            <div className={`input-field ${edit.city && "enable-edit"}`}>
              <input type="text" disabled={!edit.city} />
              <FaEdit
                className="edit-icon"
                onClick={() => setEdit({ ...edit, city: true })}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
