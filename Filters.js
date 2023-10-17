
import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchBeers } from "../actions/beerActions";
import "../App.css"

const Filters = ({ fetchBeers }) => {
  const [brewedBefore, setBrewedBefore] = useState("");
  const [brewedAfter, setBrewedAfter] = useState("");

  const handleFilter = () => {
    fetchBeers(1, brewedBefore, brewedAfter);
  };

  return (
    <div>
      <input
        className="filter"
        type="date"
        placeholder="Brewed Before"
        value={brewedBefore}
        onChange={(e) => setBrewedBefore(e.target.value)}
      />
      <input
        className="filter"
        type="date"
        placeholder="Brewed After"
        value={brewedAfter}
        onChange={(e) => setBrewedAfter(e.target.value)}
      />
      <button className="filter" onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchBeers,
};

export default connect(null, mapDispatchToProps)(Filters);
