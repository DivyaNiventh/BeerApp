// App.js
import React from 'react';
import BeerList from './components/BeerList';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import "./App.css"

function App() {
  return (
    <div className="container App">
      <h1 style={{color:"Brown"}}>Punk Beer App</h1>
      <Filters />
      <BeerList />
      <Pagination />
    </div>
  );
}

export default App;
