// import Auth from "./auth";
import { Hero } from "./hero";
import { DestinationList } from "./destinationList";
import { About } from "./about";
import { Testimonial } from "./testimonials";
import { Partners } from "./partners";
import { Contact } from "./contact";
import "../stylesheets/destinations.css";
import "swiper/css";
import "swiper/css/bundle";

const Destinations = () => {
  // Empty dependency array to run the effect only once

  // const handlePrevSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  // const handleNextSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };

  return (
    <>
      <Hero />
      <DestinationList />
      <About />
      <Testimonial />
      <Partners />
      <Contact />
      {/* <div className="destinations-list">
            <button
              type="button"
              className="swipe-btn-1"
              onClick={handlePrevSlide}
            >
              <img
                className="slide-button"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP5JREFUSEu1lt0RgkAMhHc7sRSpRK1ErEQ7kVLsJM4yd048TwZyBy+8MPk2mz+InR/uHB/NADM7ALhLKMmhFNwEMLMrgDEHJfkTLwRwqo9ecRdAofoF4ALgmSyKZ1BR/SCp4DAzawKYmayYVQKYVZOcsj1hQFKtQp5TsKnWKSFAoVrxR5K32txsBlQKOZCUNdVnE8DM5HVuv7+qPSkKkGJ1StWWFoBG/+QmVKB+FrnWE0h26b2YzSaLitTLbNT7moGvgocBLhvNgeahmk0zIK2DMptPh3UBuGz8iu637Cq10ZHpv66LLvPtrIsWX9cLa2K/k7nmhyF0MtcEzt+8AYK6lxmyTtQQAAAAAElFTkSuQmCC"
                alt="slide"
              />
            </button> */}
      {/* <Swiper
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
            </Swiper> */}
      {/* <button
              type="button"
              className="swipe-btn-2"
              onClick={handleNextSlide}
            >
              <img
                className="slide-button"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO9JREFUSEu1ltENwjAQQ+1NYBOYBDoJZRLYhI7STYwsJShSmyZNyX2icu9sX08lOhc798cqQNILwAXAleR8ZIgcQKGpm79JPlshJUDsa1CTmhLgDOAD4ASgSc0mgCQlufkNwBjkTACG2myKgOiRpDuAx1411QCDVtSMpQXYBUjUWEm0zNnYMlu3qCZAoia+L/5pVU0zIGPZTNKb96tDgABJ7ZpIXv8CCIH3sUhSn5BXpvadGrbuVHUGknxdfTZcm6u5K4MwtS3xm+xaBNmswBc0mTq760cA3c9109Q1GcT9zt6YLVuKgNo/1zzX/aviCyWOnxkFdwrCAAAAAElFTkSuQmCC"
                alt="slide"
              />
            </button> */}
    </>
  );
};

export default Destinations;
