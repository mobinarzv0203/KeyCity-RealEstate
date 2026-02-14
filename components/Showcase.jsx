import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Rent");
  const [location, setLocation] = useState("Bangalore, India");
  const [moveInDate, setMoveInDate] = useState("Select Move-in Date");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    console.log("Searching properties with:");
    console.log("Type:", activeTab);
    console.log("Location:", location);
    console.log("Date:", moveInDate);
  };

  return (
    <div id="showcase">

      <section className="showcase">
      
        <div>
          <h2 className="title">
            Buy, Rent, or Sell Your Property with Ease
          </h2>
          <p className="paragraph">
            Discover a hassle-free way to buy, sell, or rent properties—all without paying any commissions.
          </p>

          <div className="search">
            <input
              type="text"
              className="input"
              placeholder="Search By Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn">
              Search
            </button>
          </div>


          <div className="tabs">
            {["Rent", "Buy", "Sell"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`tab-switch ${
                  activeTab === tab ? "activate-mood" : "not-activate-mood"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          
          <div className="filter-by-location-time">
            <div className="f-loc">
              <span className="text-color">Location</span>
              <span className="font-mood">{location}</span>
            </div>
            <div className="f-time divider">
              <span className="text-color">When</span>
              <input
                type="date"
                className="input font-mood"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
              />
            </div>
            <div className="divider">
              <button
              onClick={handleSearch}
              className="btn-loc"
            >
              Browse Properties
            </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="showcase-right">
          <img
            src={"/public/images/houses/Showcase2.jpg"}
            alt="House"
          />
          <div className="profits">
            <div className="cool-options">
              <div className="cool-text">Lots of cool options</div>
              <div className="cool-num">375K +</div>
            </div>
            <div className="happy">
              <div className="happy-text">Happy customers</div>
              <div className="happy-num">1.5M +</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

