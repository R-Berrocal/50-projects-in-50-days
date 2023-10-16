import { useState } from 'react';

export const Search = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={`search ${active ? 'active' : ''}`}>
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn" onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};
