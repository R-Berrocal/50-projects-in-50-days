import { useState } from 'react';
import { Content } from './components/Content';
import { Hamburguer } from './components/Hamburguer';
import { Navbar } from './components/Navbar';

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className={`container ${isNavOpen ? 'show-nav' : ''}`}>
        <div className="circle-container">
          <div className="circle">
            <Hamburguer
              id="close"
              icon="fas fa-times"
              handleClick={toggleNav}
            />
            <Hamburguer id="open" icon="fas fa-bars" handleClick={toggleNav} />
          </div>
        </div>
        <Content />
      </div>
      <Navbar />
    </>
  );
}

export default App;
