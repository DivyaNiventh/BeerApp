import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./../App.css"

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const fetchBeers = async () => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`);
      setBeers(response.data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, );

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
    
      <table className="table table-striped">
        <thead>
          <tr>
            <th className='title' style={{width:"30%"}}>Name</th>
            <th className='title'>Tagline</th>
            <th className='title'>First Brewed</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => (
            <tr key={beer.id}>
              <td className='nowrap'>{beer.name}</td>
              <td className='nowrap'>{beer.tagline}</td>
              <td className='nowrap'>{beer.first_brewed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePreviousPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default BeerList;
