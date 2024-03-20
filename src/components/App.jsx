import { Routes, Route } from "react-router-dom";
import Links from "./Links";
import Login from "./Login";
import Signup from "./Signup";
import Reservations from "./Reservations";
import OffcanvasLayout from "./OffcanvasLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDestinations } from "../redux/destinations/destinationsSlice";
import Destinations from "./main-pages.jsx";
import DestinationDetails from "./details_page.jsx";
import "../App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
  return (
    <>
      <OffcanvasLayout>
        <Routes>
          <Route index element={<h2>Splash Screen</h2>} />
          <Route element={<Links />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="destinations">
            <Route path="/" element={<Destinations />} />
            <Route path="/details/:id" element={<DestinationDetails />} />
          </Route>
          <Route path="reservations" element={<Reservations />} />
        </Routes>
      </OffcanvasLayout>
    </>
  );
};

export default App;
