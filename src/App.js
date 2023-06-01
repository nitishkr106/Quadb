import React, { useState } from 'react';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      {selectedShow ? (
        <ShowDetails show={selectedShow} />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
    </div>
  );
};

export default App;
