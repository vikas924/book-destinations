import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Mainpage from "./main-page";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDestinations } from "../redux/destinations/destinationsSlice";
import "../stylesheets/destinationList.css";

export const DestinationList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState("");
  const loading = useSelector((state) => state.destinations.loading);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const token = JSON.parse(localStorage.getItem("user")) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    const desti = dispatch(fetchDestinations(token.authtoken));
    desti.then((data) => {
      if (data.error) {
        navigate("/");
      }
    });
  }, [dispatch, navigate, token.authtoken]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const destinations = useSelector(
    (state) => state.destinations.allDestinations
  );

  const swiperRef = useRef(null);

  const filter = destinations.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  return (
    <section className="destinatoncon">
      <div className="rows">
        <h3 className="listheading">Where to Go</h3>
        <p className="listsubheading">Explore The World With Us</p>
      </div>
      <div className="rows">
        <div className="destinationimg">
          <Swiper
            onSlideChange={() => console.log("slide change")}
            slidesPerView={windowWidth < 768 ? 1 : 3}
            onSwiper={(swiper) => {
              console.log(swiper);
              swiperRef.current = swiper;
            }}
          >
            {filter.map((p) => (
              <SwiperSlide key={p.id}>
                <Mainpage key={p.id} p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="destinationbutton">
          <button type="button">-</button>
          <button type="button">-</button>
        </div>
      </div>
    </section>
  );
};
