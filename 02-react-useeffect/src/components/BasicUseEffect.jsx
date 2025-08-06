import { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState(1000);
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, speed);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [count, isRunning, speed]);
  
  const handleReset = () => {
    setCount(0);
  };
  
  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };
  
  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };
  
  return (
    <div>
      <h2>Counter with Controls</h2>
      <div>Render {count} time{count !== 1 ? 's' : ''} !</div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={toggleCounter}>
          {isRunning ? 'Pause' : 'Resume'}
        </button>
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <p>Speed: {speed}ms</p>
        <button onClick={() => changeSpeed(Math.max(100, speed - 100))}>
          Faster
        </button>
        <button onClick={() => changeSpeed(speed + 100)} style={{ marginLeft: '10px' }}>
          Slower
        </button>
      </div>
    </div>
  );
};

export default BasicUseEffect;