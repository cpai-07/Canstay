import RoomCard from "./RoomCard";
import "../styles/Box.css";
const Box = ({ roomNumber }) => {
  return <div className="box">
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
  </div>;
};

export default Box;
