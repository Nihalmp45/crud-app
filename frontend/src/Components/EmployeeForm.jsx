import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Form.css'


const EmployeeForm = () => {
  // Define state for form input values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleCountryChange = async e => {
    const country = e.target.value;
    setSelectedCountry(country);




    
   
    try {
      let url;
      if (country === 'India') {
        url = `https://restcountries.com/v3.1/name/${country}?fields=states`;
      } else {
        url = `https://restcountries.com/v3.1/name/${country}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      const countryData = data[0];
      setStates(countryData?.states || []);
      setSelectedState('');
      setCities([]);
    } catch (error) {
      console.error(`Error fetching states for ${country}:`, error);
    }
  };

  const handleStateChange = async e => {
    const state = e.target.value;
    setSelectedState(state);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/state/${state}`);
      const data = await response.json();
      setCities(data || []);
    } catch (error) {
      console.error(`Error fetching cities for ${state}:`, error);
    }
  };


  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset form input values
    setName('');
    setAge('');
    setEmail('');
    setSalary('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <>
    <Link className='homepage-link' to="/">Home-page</Link>
    <form className='form-handle' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select className='selector' name="country" id="country">
        <option value="">Select a Country</option>
        {countries.map(country => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
        </select>
      </div>
      {selectedCountry &&(
         <div>
         <label htmlFor="stateSelect">State:</label>
         <select className='selector' id="stateSelect" name="state" onChange={handleStateChange} value={selectedState}>
           <option value="">Select a State</option>
           {states.map(state => (
             <option key={state} value={state}>
               {state}
             </option>
           ))}
         </select>
       </div>
      )}
       {selectedCountry && selectedState && (
        <div>
          <label htmlFor="citySelect">City:</label>
          <select className='selector' id="citySelect" name="city">
            <option value="">Select a City</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
    
    </>
  )}

export default EmployeeForm