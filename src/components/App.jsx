import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import SideNav from "./Nav";
import Destinations from "./main-pages.jsx";
import DestinationDetails from "./details_page.jsx";
import "../App.css";
import Reservations from "./Reservations.jsx";

const App = () => {
  return (
    <div className="app d-flex">
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/registration" element={<Signup />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/details/:id" element={<DestinationDetails />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
};

export default App;
