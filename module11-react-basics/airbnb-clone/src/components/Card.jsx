const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location === "Online") badgeText = "ONLINE";

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={props.img} alt="" />
      <div className="card-stats">
        <img className="card-star" src="./images/star.png" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="card-price bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
