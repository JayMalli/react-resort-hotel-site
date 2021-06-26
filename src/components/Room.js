import DefaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
const Room = ({ room }) => {
  const { name, slug: id, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || DefaultImg} alt="Single Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${id}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired,
  }),
};
