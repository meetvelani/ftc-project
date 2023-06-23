import CoinIcon from "../../assets/images/coins.png";
import "./Shop.scss";
import { CoinCard } from "./components/CoinCard";

export const Shop = () => {
  const coinCards = [{ count: 10 }, { count: 100 }, { count: 1000 }];
  return (
    <div className="shop">
      <div className="inner-div">
        <h1>
          FTC <span>Coin</span>
        </h1>
        <div className="cards">
          {coinCards.map((coin) => (
            <CoinCard total={coin.count} />
          ))}
        </div>
        <div className="buy-now-section">
          <div className="coin-box">
            <img src={CoinIcon} alt="icon" />
            <span>0</span>
          </div>
          <button className="button-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
