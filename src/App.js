import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/StudentLogin";
import SignUp from "./pages/AdminLogin";
import Home from "./pages/Home";
import RoomAllot from "./pages/RoomAllot";
import RoomVacancies from "./pages/RoomVacancies";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import TotalRooms from "./pages/TotalRooms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminLogin" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/room" element={<RoomAllot />} />
        <Route path="/stage" element={<RoomVacancies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/totalrooms" element={<TotalRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
