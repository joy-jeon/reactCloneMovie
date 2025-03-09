import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, [])
  return (
    <div>
      {/* 로딩중일 때 개수 숨기기, 로딩 끝나면 개수 보여주기 */}
      {/* as-is ({coins.length}) , to-be `(${coins.length})` */}
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {/* 로딩중일 때 select 숨기기, 로딩 끝나면 select 보여주기 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item) => (
            <option>
              <li>{item.name} {item.symbol} : ${item.quotes.USD.price} USD</li>
            </option>
          ))}
        </select>
      )
      }


    </div>
  )
}

export default App;