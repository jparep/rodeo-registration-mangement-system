import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RodeoForm from '../components/RodeoForm';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/series/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Rodeo Registration System</h1>
      <RodeoForm />
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.series_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
