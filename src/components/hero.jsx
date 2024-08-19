export const Hero = () => {
  return (
    <>
      <section className="hero position-relative">
        <div className="container">
          <div className="row">
            <h1 className="destinations-heading">Discover The World</h1>
            <p className="destinations-sub-heading">
              Enjoy Luxurious Adventures Trip With Us
            </p>
            <div className="banner">
              <div className="bannerdiv">
                <h3>Destination</h3>
                <input className="destinationinput" type="text" />
              </div>
              <div className="bannerdiv">
                <h3>Date</h3>
                <input className="destinationinput" type="text" />
              </div>
              <div className="bannerdiv">
                <h3>People</h3>
                <input className="destinationinput" type="text" />
              </div>
              <button className="herobutton" type="button">
                search
              </button>
              {/* <input
                className="destinations-search"
                type="text"
                placeholder="Search by destination name"
                value={searchQuery}
                onChange={handleSearchChange}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
