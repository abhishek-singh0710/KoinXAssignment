import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyContext = ( {children}) => {

  const [bitcoinData, setBitcoinData] = useState(null); // Bitcoin prices and changes
  const [trendingCoins, setTrendingCoins] = useState([]); // Trending coins
  const [allTrendingCoins, setAllTrendingCoins] = useState([]); // All trending coins
  const [finalTrendingCoins, setFinalTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch Data on Mount
    fetchCryptoData();
    fetchTrendingCoins();
  }, []);

  // Fetch Bitcoin Data from Coingecko
  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true`
      );
      const data = await response.json();
      setBitcoinData(data.bitcoin);
    } catch (error) {
      console.error("Error fetching Bitcoin data:", error);
    }
  };

  // Fetch Trending Coins Data from Coingecko
  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const data = await response.json();
      const allTrendingCoins = data.coins.map((coin) => ({
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol,
        price_btc: coin.item.price_btc,
        sparkline: coin.item.data.sparkline,
        thumb: coin.item.thumb,
      }));
      setAllTrendingCoins(allTrendingCoins);
      const topTrending = data.coins.slice(0, 3).map((coin) => ({
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol,
        price_btc: coin.item.price_btc,
        sparkline: coin.item.data.sparkline,
        thumb: coin.item.thumb,
      }));
      setTrendingCoins(topTrending);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  // Update finalTrendingCoins whenever trendingCoins changes
  useEffect(() => {
    setFinalTrendingCoins(trendingCoins.slice(0, 3));
  }, [trendingCoins]);

  useEffect(() => {
    setAllTrendingCoins(allTrendingCoins);
  }, [allTrendingCoins]);


    return (
        <CryptoContext.Provider value={{ bitcoinData, finalTrendingCoins, allTrendingCoins }}>
            {children}
        </CryptoContext.Provider>
    )
}