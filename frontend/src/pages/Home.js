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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to the Rodeo Registration System</h1>
      <div className="w-full max-w-2xl">
        <RodeoForm />
      </div>
    </div>
  );
};

export default Home;
