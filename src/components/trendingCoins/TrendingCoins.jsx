import { useContext } from "react";
import "./trendingCoins.css";
import { CryptoContext } from "../../assets/MyContext";
const TrendingCoins = () => {

  const {finalTrendingCoins} = useContext(CryptoContext);
  console.log(finalTrendingCoins);

  return (
    <div className='trending-coins'>
      <div className="upper">
        Trending Coins (24h)
      </div>
      <div className="lower">
        {/* <div className="card">
            <div className="coin">
              <img src="" alt="icon" />
              Ethereum(ETH)
            </div>
            <div className="percentage">
              8.21%
            </div>
        </div>
        <div className="card">
            <div className="coin">
              <img src="" alt="icon" />
              Ethereum(ETH)
            </div>
            <div className="percentage">
              8.21%
            </div>
        </div>
        <div className="card">
            <div className="coin">
              <img src="" alt="icon" />
              Ethereum(ETH)
            </div>
            <div className="percentage">
              8.21%
            </div>
        </div> */}
        {finalTrendingCoins.map((coin,index) => (
          <>
          <div className="card" key={index}>
            <div className="coin">
              <img src={coin.thumb} alt="icon" height={20} />
              {coin.name}({coin.symbol})
            </div>
            <div className="percentage">
            {parseFloat(coin.price_btc).toFixed(2)}%
            </div>
        </div>
        </>
        ))}
      </div>
    </div>
  )
}

export default TrendingCoins
