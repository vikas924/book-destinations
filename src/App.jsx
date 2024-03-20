import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchDestinations } from "./redux/destinations/destinationsSlice";
import Destinations from "./components/main-pages.jsx";
import DestinationDetails from "./components/details_page.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Destinations />} />
        <Route path="/details/:id" element={<DestinationDetails />} />
      </Routes>
    </>
  );
}

export default App;
