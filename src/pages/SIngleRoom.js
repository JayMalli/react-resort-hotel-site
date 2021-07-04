import React from "react";
import { useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import DefaultImg from "../images/room-2.jpeg";
import Banner from "../components/Banner";
const SingleRoom = () => {
  const { id } = useParams();
  const { getRoom } = useGlobalContext();
  let room = getRoom(id);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    );
  }
  const {
    name,
    capacity,
    description,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...otherImgs] = images;

  return (
    <>
      <StyledHero img={mainImg || DefaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {otherImgs.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>
              Max Capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets are allowed" : "pets are not allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
