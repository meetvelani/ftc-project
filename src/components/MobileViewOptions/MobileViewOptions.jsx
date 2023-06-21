import { FaHome, FaNewspaper } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { TbBellFilled } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom";
import "./MobileViewOptions.scss";

export const MobileViewOptions = () => {
  const { pathname } = useLocation();
  return (
    <div className="bottom-options-container">
      <div className="inner-box">
        <Link to={"/"}>
          <div className={`icon-box ${pathname === "/" && "active"}`}>
            <FaHome className="icon" />
          </div>
        </Link>
        <Link>
          <div className={`icon-box ${pathname === "/" && "active"}`}>
            <MdChat className="icon" />
          </div>
        </Link>
        <Link>
          <div className={`icon-box ${pathname === "/" && "active"}`}>
            <AiFillPlusSquare className="icon" />
          </div>
        </Link>
        <Link>
          <div className={`icon-box ${pathname === "/" && "active"}`}>
            <TbBellFilled className="icon" />
          </div>
        </Link>
        <Link>
          <div className={`icon-box ${pathname === "/" && "active"}`}>
            <FaNewspaper className="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};
