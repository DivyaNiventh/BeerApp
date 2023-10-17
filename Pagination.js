
import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beerActions';
import "../App.css"

const Pagination = ({ fetchBeers }) => {
    fetchBeers();
  ;

  return (
    <div>
      {/* <button className='button1' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button className='button1' onClick={() => handlePageChange(page + 1)}>Next</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

const mapDispatchToProps = {
  fetchBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
