import React, { useState, useEffect } from 'react';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1 className='centered' style={{ color: 'red' }}>LIST OF ALL SHOWS</h1>
      <div className="container">
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          {/* Add more details here if desired */}
          <button onClick={() => onSelectShow(show.show)}>View Summary</button>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default ShowList;
