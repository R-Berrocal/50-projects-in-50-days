type CardTypeProps = {
  id: string;
  active: string;
  msg: string;
  img: string;
  onclick: (event: React.MouseEvent) => void;
};

export const Card = ({ id, active, msg, img, onclick }: CardTypeProps) => {
  return (
    <div
      id={id}
      className={`panel ${active}`}
      style={{ backgroundImage: `url(${img})` }}
      onClick={onclick}
    >
      <h3>{msg}</h3>
    </div>
  );
};
