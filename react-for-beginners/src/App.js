import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("매번 새로고침")
  useEffect(() => {
    console.log("한번실행")
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>버튼입니다.</button>
    </div>
  );
}

export default App;
