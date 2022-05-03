import RoomCard from "./RoomCard";
import "../styles/Box.css";
const Box = ({ room }) => {
  console.log(room,"2");
  return <div className="box">
    {
      room.map((data,index)=>{
        return <RoomCard key={index} room={data}/>
      })
    }
    {/* <RoomCard room={room}/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/>
    <RoomCard/> */}
  </div>;
};

export default Box;
