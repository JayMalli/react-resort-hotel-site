import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { useGlobalContext } from "../context";

const RoomsContainer = () => {
  const { rooms, sortedRooms } = useGlobalContext();
  return (
    <>
      {/*for search only */}
      <RoomFilter rooms={rooms} />
      {/*show the list of rooms according to  search  */}
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
