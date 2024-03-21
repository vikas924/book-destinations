import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { fetchDestinations } from "../redux/destinations/destinationsSlice";
import { createReservations } from "../redux/reservations/reservationsSlice";
import Auth from "./auth";
import image from "../assets/images/destination.png";
import "../stylesheets/details-page.css";

const DestinationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    number: 1,
    number1: 1,
  });

  // Get the current date
  const currentDate = new Date();

  // Add 1 week to the current date
  const oneWeekLater = new Date(
    currentDate.getTime() + parseInt(value.number1) * 24 * 60 * 60 * 1000
  );

  // Format the current date
  const formattedCurrentDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();

  // Format one week later
  const formattedOneWeekLater =
    oneWeekLater.getFullYear() +
    "-" +
    (oneWeekLater.getMonth() + 1) +
    "-" +
    oneWeekLater.getDate();

  const selected = useSelector((state) =>
    state.destinations.allDestinations.find((pkg) => pkg.id == id)
  );

  const [includeMeals, setIncludeMeals] = useState(false);
  const [total, setTotal] = useState(100 + parseInt(selected.price_per_night));

  const checkbox = (e) => {
    const int = parseInt(selected.price_per_meal);
    if (e.target.checked) {
      setIncludeMeals(true);
      setTotal(total + int);
    } else {
      setIncludeMeals(false);
      setTotal(total - int);
    }
  };

  const handleChange = (event) => {
    const input = document.getElementById("number");
    const input2 = document.getElementById("number1");
    if (event.target.value > 0 && event.target.value < 10) {
      setValue({ ...value, [event.target.id]: event.target.value });
      setTotal(
        100 + input.value * input2.value * parseInt(selected.price_per_night)
      );
    }
  };
  const isDestinationFetched = useSelector(
    (state) => state.destinations.isDestinationFetched
  );

  const allDestinations = useSelector(
    (state) => state.destinations.allDestinations
  );

  useEffect(() => {
    if (!isDestinationFetched || !allDestinations.find((pkg) => pkg.id == id)) {
      dispatch(fetchDestinations());
    }
  }, [allDestinations, dispatch, id, isDestinationFetched]);

  const clickHandle = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const data = {
      reservation: {
        destination_id: id,
        total_people: value.number,
        include_meals: includeMeals,
        start_date: `${formattedCurrentDate}`,
        end_date: `${formattedOneWeekLater}`,
      },
    };
    const response = dispatch(
      createReservations({ token: user.authtoken, data })
    );
    response.then((data) => {
      console.log(data);
      if (data) {
        data.payload.status === "success"
          ? alert("Reservation created successfully")
          : alert("Reservation failed");
      }
    });
  };

  return (
    <>
      <Auth />
      <div className="destination-details">
        <div className="details-wrap">
          <div className="img-wrap">
            <img src={image} alt="location" className="loc-img" />
          </div>
          <div className="details">
            <div className="details-container">
              <h2 className="headline">{selected.name}</h2>
              <ul className="details-list">
                <li className="list-item">
                  <strong>Finance fee:</strong> $100
                </li>
                <li className="list-item">
                  <strong>Inculde Meals:</strong>
                  <input
                    id="include-meals"
                    type="checkbox"
                    onChange={checkbox}
                    className="checkbox"
                  />
                  ${selected.price_per_meal}/night
                </li>
                <li className="list-item">
                  <strong>Nights:</strong> ${selected.price_per_night}/night
                </li>
                <li className="list-item">
                  <strong>Number of people</strong>
                  <input
                    type="number"
                    id="number"
                    name="quantity"
                    value={value.number}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    step="1"
                  />
                </li>
                <li className="list-item">
                  <strong>Duration</strong>
                  <input
                    type="number"
                    id="number1"
                    name="quantity"
                    value={value.number1}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    step="1"
                  />
                  days
                </li>
                <li className="list-item">
                  <strong>Total:</strong> ${total}
                </li>
              </ul>
            </div>
            <div className="reserve-btn">
              <button
                type="button"
                onClick={clickHandle}
                className="btn btn-lg"
              >
                Book
                <IoIosArrowDropright className="btn-icon text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="back-btn">
          <NavLink to="/destinations">
            <button type="button" className="btn btn-lg" aria-label="Go Back">
              <IoIosArrowDropleft className="back-btn-icon text-white" />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DestinationDetails;
