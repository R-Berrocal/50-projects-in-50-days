import { useEffect, useState } from 'react';

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function App() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => blurring(), 30);
    const blurring = () => {
      setLoad((prevLoad) => {
        const newLoad = prevLoad + 1;
        if (newLoad > 98) {
          clearInterval(interval);
        }
        return newLoad;
      });
    };
  }, []);

  return (
    <>
      <section
        className="bg"
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      ></section>
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
    </>
  );
}

export default App;
