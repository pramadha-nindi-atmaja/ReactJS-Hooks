import { useEffect, useState } from "react";

const BasicBergantung = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    setCalculation(() => count * 2);
    if (count > 0) {
      setHistory((prev) => [...prev, { count, calculation: count * 2 }]);
    }
  }, [count]);

  const resetCounter = () => {
    setCount(0);
    setHistory([]);
  };

  const decrementCount = () => {
    setCount((c) => Math.max(0, c - 1));
  };

  return (
    <div className="counter-container">
      <h2>Basic Counter</h2>
      <p>Count: {count}</p>
      <div className="button-group">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button type="button" onClick={decrementCount}>
          -
        </button>
        <button type="button" onClick={resetCounter}>
          Reset
        </button>
      </div>
      <p>Calculation: {calculation}</p>
      
      <button type="button" onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </button>
      
      {showHistory && history.length > 0 && (
        <div className="history-container">
          <h3>Count History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                Count: {item.count} → Calculation: {item.calculation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasicBergantung;