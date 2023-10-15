type HamburguerProps = {
  id: string;
  icon: string;
  handleClick: () => void;
};

export const Hamburguer = ({ id, icon, handleClick }: HamburguerProps) => {
  return (
    <button onClick={handleClick} id={id}>
      <i className={icon}></i>
    </button>
  );
};
