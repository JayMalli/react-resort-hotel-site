import React, { useContext, useEffect, useState } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [allrooms, setAllRooms] = useState(false);

  const fetchData = () => {
    let tempItems = data.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => {
        return img.fields.file.url;
      });
      let room = { ...item.fields, id, images };
      return room;
    });
    setLoading(false);
    return tempItems;
  };

  const openNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handelChangeType = (e) => {
    let tempRooms = [...rooms];
    const name = e.target.name;
    const value = e.target.value;
    if (value === "all") {
      setType("all");
      setSortedRooms(tempRooms);
    } else {
      setType(value);
      tempRooms = tempRooms.filter((item) => item.type === value);
    }
    filterRooms(tempRooms, name);
  };

  const handelChangeCapacity = (e) => {
    let tempRooms = [...rooms];
    const name = e.target.name;
    const value = e.target.value;
    let cap = parseInt(value);
    setCapacity(cap);
    tempRooms = tempRooms.filter((item) => item.capacity >= cap);
    filterRooms(tempRooms, name);
  };

  const handelChangePrice = (e) => {
    let tempRooms = [...rooms];
    const name = e.target.name;
    const value = e.target.value;
    let p = parseInt(value);
    setPrice(p);
    tempRooms = tempRooms.filter((item) => item.price <= p);
    filterRooms(tempRooms, name);
  };

  const handelChangeSize = (e) => {
    let tempRooms = [...rooms];
    const name = e.target.name;
    const value = e.target.value;
    if (name === "minSize") {
      setMinSize(value);
      tempRooms = tempRooms.filter(
        (item) => item.size >= value && item.size <= maxSize
      );
    }
    if (name === "maxSize") {
      setMaxSize(value);
      tempRooms = tempRooms.filter(
        (item) => item.size <= value && item.size >= minSize
      );
    }
    filterRooms(tempRooms, name);
  };

  const handelChangeAllRooms = (e) => {
    let tempRooms = [...rooms];
    const checked = e.target.checked;

    setAllRooms(checked ? true : false);
    if (checked === true) {
      displayRooms(tempRooms);
      setType("all");
      setCapacity(1);
    }
  };

  const filterRooms = (tempRooms, name) => {
    setAllRooms(false);
    if (type !== "all" && name !== "type") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }
    if (name !== "capacity") {
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
    }
    if (name !== "price") {
      tempRooms = tempRooms.filter((item) => item.price <= price);
    }
    if (name !== "minSize" && name !== "maxSize") {
      tempRooms = tempRooms.filter(
        (item) => item.size >= minSize && item.size <= maxSize
      );
    }

    setSortedRooms(tempRooms);
  };

  const displayRooms = (tempRooms) => {
    setSortedRooms(tempRooms);
    if (rooms) {
      // for min & max price
      let items = [];
      tempRooms.map((item) => {
        return items.push(item.price);
      });
      items.sort();
      setPrice(items[items.length - 1]);
      setMinPrice(items[0]);
      setMaxPrice(items[items.length - 1]);

      // for min & max size
      items = [];
      tempRooms.map((item) => {
        return items.push(item.size);
      });
      setMinSize(items[0]);
      setMaxSize(items[items.length - 1]);
    }
  };

  useEffect(() => {
    setLoading(true);
    let tempRooms = fetchData();
    let tempFeaturedRooms = tempRooms.filter((item) => item.featured === true);
    setRooms(tempRooms);
    setFeaturedRooms(tempFeaturedRooms);
    displayRooms(tempRooms);
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        isOpenNavbar,
        openNavbar,
        loading,
        featuredRooms,
        rooms,
        sortedRooms,
        getRoom,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
