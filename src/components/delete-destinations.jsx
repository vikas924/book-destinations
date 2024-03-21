import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDestinations,
  deleteDestination,
} from "../redux/destinations/destinationsSlice"; // Adjust the path accordingly
import Auth from "./auth";

const DestinationsWithDelete = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(
    (state) => state.destinations.allDestinations
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    dispatch(fetchDestinations(user.authtoken));
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      dispatch(deleteDestination(id));
    }
  };

  return (
    <>
      <Auth />
      <div>
        {destinations.map((destination) => (
          <div key={destination.id}>
            <h3>{destination.name}</h3>
            {/* Add more destination details here */}
            <button onClick={() => handleDelete(destination.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DestinationsWithDelete;
