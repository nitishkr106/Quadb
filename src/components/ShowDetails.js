import React, { useState } from 'react';

const ShowDetails = ({ show }) => {
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    movieName: show.name,
    // Add other relevant details as desired
  });

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here (e.g., submit to a server or store in local/session storage)
    console.log(formData);
  };

  return (
    <div>
      <h2 style={{color:'red'}}> DETAILS OF SHOW</h2>
      <h3>{show.name}</h3>
      <h4 className="red-paragraph">{show.summary}</h4>
      {bookingFormVisible ? (
        <form onSubmit={handleSubmit}>
          <h3 style={{color:'red'}}>Book Ticket</h3>
          <div>
            <label htmlFor="movieName">Movie Name:</label>
            <input
              type="text"
              id="movieName"
              name="movieName"
              value={formData.movieName}
              onChange={handleFormInputChange}
              disabled
            />
          </div>
          {/* Add other relevant form fields here */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={handleBookTicket}>Book Ticket</button>
      )}
    </div>
  );
};

export default ShowDetails;
