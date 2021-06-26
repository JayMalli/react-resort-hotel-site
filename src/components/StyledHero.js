import styled from "styled-components";
import DefaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background-image: url(${(props) => (props.img ? props.img : DefaultImg)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
