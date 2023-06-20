import { useState } from "react";
import CoinImg from "../../../assets/images/ftc-coin-lg.png";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export const CoinCard = ({ total }) => {
  const [count, setCount] = useState(total);

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="coin-card">
      <img src={CoinImg} alt="icon" className="coin-img" />
      <div className="add-and-remove">
        <div className="icon" onClick={decreaseCount}>
          <AiOutlineMinusCircle />
        </div>
        <span>{count}</span>
        <div className="icon" onClick={increaseCount}>
          <AiOutlinePlusCircle />
        </div>
      </div>
    </div>
  );
};
