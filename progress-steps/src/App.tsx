import { useState } from 'react';
import { Progress } from './components/Progress';

const progress = [1, 2, 3, 4, 5];

function App() {
  const [currentActive, setCurrentActive] = useState(1);
  const width = `${((currentActive - 1) / (progress.length - 1)) * 100}%`;

  const handlePrev = () => {
    setCurrentActive(currentActive - 1);
  };

  const handleNext = () => {
    setCurrentActive(currentActive + 1);
  };
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress" style={{ width }}></div>
        {progress.map((progress) => (
          <Progress
            key={progress}
            progress={progress}
            styleClass={`circle ${currentActive >= progress ? 'active' : ''}`}
          />
        ))}
      </div>

      <button
        className="btn"
        id="prev"
        disabled={currentActive === 1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={handleNext}
        disabled={currentActive === progress.length}
      >
        Next
      </button>
    </div>
  );
}

export default App;
