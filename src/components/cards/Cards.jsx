import PropTypes from "prop-types";
import "./cards.css";
import { CryptoContext } from "../../assets/MyContext";
import { useContext, useRef } from "react";

const Cards = ({ title }) => {
  const carouselRef = useRef(null);
  const { allTrendingCoins } = useContext(CryptoContext);

  console.log(allTrendingCoins);


  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="crypto-carousel">
      <h2 className="trend">{title}</h2>
      <div className="carousel-container">
        <button className="scroll-button left-icon" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="carousel-items" ref={carouselRef}>
          {allTrendingCoins.map((item) => (
            <div className="crypto-card" key={item.id}>
              <div className="card-header">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="coin-icon"
                />
                <span className="coin-name">{item.name}</span>
              </div>
              <div className="coin-price">{item.price_btc.toFixed(8)} BTC</div>
              <div className="price-chart">
                {item.sparkline ? (
                  <img
                    src={item.sparkline}
                    alt="Price trend"
                  />
                ) : (
                  <span>No Sparkline Available</span>
                )}
                {/* <img
                    src={item.sparkline}
                    alt="Price trend"
                  /> */}
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right-icon" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cards;
