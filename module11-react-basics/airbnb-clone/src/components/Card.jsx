const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="" />
      <div className="card-stats">
        <img className="card-star" src="./star.png" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
