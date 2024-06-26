import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RodeoForm = () => {
  const [formData, setFormData] = useState({
    series_name: '',
    rodeo_name: '',
    contestant_name: '',
    event_name: [],
    is_timed: false,
    header_partner_one: '',
    header_partner_two: '',
    heeler_partner_one: '',
    heeler_partner_two: '',
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
    <div className="flex justify-center items-center min-h-screen px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center">Register for a Rodeo Event</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-gray-700">Series</span>
            <select
              name="series_name"
              value={formData.series_name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            >
              <option value="">Select Series</option>
              {series.map(s => (
                <option key={s.id} value={s.series_name}>{s.series_name}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Rodeo</span>
            <select
              name="rodeo_name"
              value={formData.rodeo_name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            >
              <option value="">Select Rodeo</option>
              {rodeos.map(r => (
                <option key={r.id} value={r.rodeo_name}>{r.rodeo_name}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Contestant</span>
            <select
              name="contestant_name"
              value={formData.contestant_name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            >
              <option value="">Select Contestant</option>
              {contestants.map(c => (
                <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4">
          <span className="block text-gray-700 mb-2">Events:</span>
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
                {e.event_name === 'Mens Breakaway' && formData.event_name.includes('Mens Breakaway') && (
                  <input
                    type="number"
                    name="mb_number"
                    value={formData.mb_number}
                    onChange={handleChange}
                    className="ml-2 w-20 p-1 border rounded"
                    maxLength="2"
                    placeholder="00"
                  />
                )}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            {formData.event_name.includes('Heeler') && (
              <>
                <label className="block">
                  <span className="text-gray-700">Partner One (Heeler)</span>
                  <select
                    name="heeler_partner_one"
                    value={formData.heeler_partner_one}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded"
                  >
                    <option value="">Select Partner One</option>
                    {contestants.map(c => (
                      <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
                    ))}
                  </select>
                </label>
                <label className="block mt-2">
                  <span className="text-gray-700">Partner Two (Heeler)</span>
                  <select
                    name="heeler_partner_two"
                    value={formData.heeler_partner_two}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded"
                  >
                    <option value="">Select Partner Two</option>
                    {contestants.map(c => (
                      <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
                    ))}
                  </select>
                </label>
              </>
            )}
          </div>
          <div>
            {formData.event_name.includes('Header') && (
              <>
                <label className="block">
                  <span className="text-gray-700">Partner One (Header)</span>
                  <select
                    name="header_partner_one"
                    value={formData.header_partner_one}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded"
                  >
                    <option value="">Select Partner One</option>
                    {contestants.map(c => (
                      <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
                    ))}
                  </select>
                </label>
                <label className="block mt-2">
                  <span className="text-gray-700">Partner Two (Header)</span>
                  <select
                    name="header_partner_two"
                    value={formData.header_partner_two}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded"
                  >
                    <option value="">Select Partner Two</option>
                    {contestants.map(c => (
                      <option key={c.id} value={c.contestant_name}>{c.contestant_name}</option>
                    ))}
                  </select>
                </label>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RodeoForm;
