import { FaHome, FaNewspaper } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { TbBellFilled } from "react-icons/tb";
import './MobileViewOptions.scss';

export const MobileViewOptions = () => {
  return (
    <div className="bottom-options-container">
      <div className="inner-box">
        <FaHome className="icon" />
        <MdChat className="icon" />
        <AiFillPlusSquare className="icon" />
        <TbBellFilled className="icon" />
        <FaNewspaper className="icon" />
      </div>
    </div>
  );
};
