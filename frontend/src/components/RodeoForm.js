import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RodeoForm = () => {
  const [formData, setFormData] = useState({
    series_name: '',
    rodeo_name: '',
    contestant_name: '',
    event_names: [],
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
    axios.get('http://127.0.0.1:8000/api/series/').then(response => setSeries(response.data));
    axios.get('http://127.0.0.1:8000/api/rodeo/').then(response => setRodeos(response.data));
    axios.get('http://127.0.0.1:8000/api/contestants/').then(response => setContestants(response.data));
    axios.get('http://127.0.0.1:8000/api/events/').then(response => setEvents(response.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'event_names') {
      if (checked) {
        setFormData({
          ...formData,
          event_names: [...formData.event_names, value]
        });
      } else {
        setFormData({
          ...formData,
          event_names: formData.event_names.filter(event => event !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Series</label>
        <select
          name="series_name"
          value={formData.series_name}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Series</option>
          {series.map(s => (
            <option key={s.id} value={s.series_name}>{s.series_name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rodeo</label>
        <select
          name="rodeo_name"
          value={formData.rodeo_name}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Rodeo</option>
          {rodeos.map(r => (
            <option key={r.id} value={r.rodeo_name}>{r.rodeo_name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Contestant</label>
        <select
          name="contestant_name"
          value={formData.contestant_name}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Contestant</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </div>

      <fieldset className="mb-4">
        <legend className="block text-sm font-medium text-gray-700">Events</legend>
        {events.map(e => (
          <div key={e.event} className="flex items-center">
            <input
              type="checkbox"
              name="event_names"
              value={e.event_name}
              checked={formData.event_names.includes(e.event_name)}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="event_names" className="ml-3 text-sm text-gray-600">{e.event_name}</label>
          </div>
        ))}
      </fieldset>

      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_timed"
            checked={formData.is_timed}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="is_timed" className="ml-3 text-sm text-gray-600">Timed Event</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Partner One</label>
        <select
          name="partner_one"
          value={formData.partner_one}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Partner One</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Partner Two</label>
        <select
          name="partner_two"
          value={formData.partner_two}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Partner Two</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Men's Breakaway Number</label>
        <input
          type="number"
          name="mb_number"
          value={formData.mb_number}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default RodeoForm;
