import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RodeoForm = () => {
  const [formData, setFormData] = useState({
    series_name: '',
    rodeo_name: '',
    contestant_name: '',
    event_name: [],
    is_timed: false,
    partner_one: '',
    partner_two: '',
    mb_number: ''
  });

  const [series, setSeries] = useState([]);
  const [rodeos, setRodeos] = useState([]);
  const [contestants, setContestants] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch existing data for dropdowns
    axios.get('http://127.0.0.1:8000/api/series/').then(response => setSeries(response.data));
    axios.get('http://127.0.0.1:8000/api/rodeo/').then(response => setRodeos(response.data));
    axios.get('http://127.0.0.1:8000/api/contestants/').then(response => setContestants(response.data));
    axios.get('http://127.0.0.1:8000/api/events/').then(response => setEvents(response.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'event_name') {
      setFormData({
        ...formData,
        event_name: checked
          ? [...formData.event_name, value]
          : formData.event_name.filter(event => event !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to the backend
    axios.post('http://127.0.0.1:8000/api/contest-events/', formData)
      .then(response => {
        alert('Data submitted successfully');
      })
      .catch(error => {
        alert('Error submitting data');
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg border border-gray-300" style={{ width: '600px', height: '600px' }}>
        <h2 className="text-2xl font-bold mb-4">Register for a Rodeo Event</h2>
        <label className="block mb-2">
          Series:
          <select
            name="series_name"
            value={formData.series_name}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Series</option>
            {series.map(s => (
              <option key={s.id} value={s.series_name}>{s.series_name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Rodeo:
          <select
            name="rodeo_name"
            value={formData.rodeo_name}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Rodeo</option>
            {rodeos.map(r => (
              <option key={r.id} value={r.rodeo_name}>{r.rodeo_name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Contestant:
          <select
            name="contestant_name"
            value={formData.contestant_name}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Contestant</option>
            {contestants.map(c => (
              <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
            ))}
          </select>
        </label>
        <div className="mb-4">
          <span className="block mb-2">Events:</span>
          <div className="grid grid-cols-2 gap-2">
            {events.map(e => (
              <label key={e.event} className="flex items-center">
                <input
                  type="checkbox"
                  name="event_name"
                  value={e.event_name}
                  checked={formData.event_name.includes(e.event_name)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {e.event_name}
              </label>
            ))}
          </div>
        </div>
        <label className="block mb-2">
          <input
            type="checkbox"
            name="is_timed"
            checked={formData.is_timed}
            onChange={handleChange}
            className="mr-2"
          />
          Timed Event
        </label>
        <label className="block mb-2">
          Partner One:
          <select
            name="partner_one"
            value={formData.partner_one}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Partner One</option>
            {contestants.map(c => (
              <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Partner Two:
          <select
            name="partner_two"
            value={formData.partner_two}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Partner Two</option>
            {contestants.map(c => (
              <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Men's Breakaway Number:
          <input
            type="number"
            name="mb_number"
            value={formData.mb_number}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RodeoForm;
