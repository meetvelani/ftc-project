import { FaHome, FaNewspaper } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { TbBellFilled } from "react-icons/tb";
import "./MobileViewOptions.scss";

export const MobileViewOptions = () => {
  return (
    <div className="bottom-options-container">
      <div className="inner-box">
        <div className="icon-box">
          <FaHome className="icon" />
        </div>
        <div className="icon-box">
          <MdChat className="icon" />
        </div>
        <div className="icon-box">
          <AiFillPlusSquare className="icon" />
        </div>
        <div className="icon-box">
          <TbBellFilled className="icon" />
        </div>
        <div className="icon-box">
          <FaNewspaper className="icon" />
        </div>
      </div>
    </div>
  );
};
