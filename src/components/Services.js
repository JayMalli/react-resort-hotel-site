import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
    },
  ];
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
