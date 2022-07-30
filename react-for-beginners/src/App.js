import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinIndex, setCoinIndex] = useState(0);
  const [usd, setUsd] = useState(0);
  const onSelect = (event) => {
    setCoinIndex(event.target.value);
  };
  const onChange = (event) => {
    setUsd(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={coin.id} value={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes["USD"].price} USD
            </option>
          ))}
        </select>
      )}
      <br />
      USD: <input type="number" value={usd} onChange={onChange} />
      <br />
      Coin:{" "}
      <input
        type="text"
        value={
          coins.length > 0 ? usd / coins[coinIndex].quotes["USD"].price : 0
        }
        readOnly
      />
    </div>
  );
}

export default App;
