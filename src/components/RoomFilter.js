import { useGlobalContext } from "../context";
import Title from "./Title";
let getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomFilter = ({ rooms }) => {
  const {
    handelChangeType,
    handelChangeCapacity,
    handelChangePrice,
    handelChangeSize,
    handelChangeAllRooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    allrooms,
  } = useGlobalContext();
  // get unique types
  let types = getUnique(rooms, "type");
  // add 'all' types
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="from-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handelChangeType}
            className="form-control"
          >
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* guest  type */}
        <div className="from-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handelChangeCapacity}
            className="form-control"
          >
            {people}
          </select>
        </div>
        {/* end of guest type */}

        {/* price type */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handelChangePrice}
          />
        </div>
        {/* end of  price type */}

        {/* size type */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              value={minSize}
              onChange={handelChangeSize}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              className="size-input"
              value={maxSize}
              onChange={handelChangeSize}
            />
          </div>
        </div>
        {/* end of  price type */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="all-rooms"
              id="all-rooms"
              checked={allrooms}
              onChange={handelChangeAllRooms}
            />
            <label htmlFor="all-rooms">All Rooms</label>
          </div>
        </div>
        {/*end of  extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
