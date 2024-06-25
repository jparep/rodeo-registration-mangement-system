import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RodeoForm = () => {
  const [formData, setFormData] = useState({
    series_name: '',
    rodeo_name: '',
    contestant_name: '',
    event_name: '',
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
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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
    <form onSubmit={handleSubmit}>
      <label>
        Series:
        <select name="series_name" value={formData.series_name} onChange={handleChange}>
          <option value="">Select Series</option>
          {series.map(s => (
            <option key={s.id} value={s.series_name}>{s.series_name}</option>
          ))}
        </select>
      </label>
      <label>
        Rodeo:
        <select name="rodeo_name" value={formData.rodeo_name} onChange={handleChange}>
          <option value="">Select Rodeo</option>
          {rodeos.map(r => (
            <option key={r.id} value={r.rodeo_name}>{r.rodeo_name}</option>
          ))}
        </select>
      </label>
      <label>
        Contestant:
        <select name="contestant_name" value={formData.contestant_name} onChange={handleChange}>
          <option value="">Select Contestant</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </label>
      <label>
        Event:
        <select name="event_name" value={formData.event_name} onChange={handleChange}>
          <option value="">Select Event</option>
          {events.map(e => (
            <option key={e.event} value={e.event_name}>{e.event_name}</option>
          ))}
        </select>
      </label>
      <label>
        Timed Event:
        <input type="checkbox" name="is_timed" checked={formData.is_timed} onChange={handleChange} />
      </label>
      <label>
        Partner One:
        <select name="partner_one" value={formData.partner_one} onChange={handleChange}>
          <option value="">Select Partner One</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </label>
      <label>
        Partner Two:
        <select name="partner_two" value={formData.partner_two} onChange={handleChange}>
          <option value="">Select Partner Two</option>
          {contestants.map(c => (
            <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
          ))}
        </select>
      </label>
      <label>
        Men's Breakaway Number:
        <input type="number" name="mb_number" value={formData.mb_number} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RodeoForm;
