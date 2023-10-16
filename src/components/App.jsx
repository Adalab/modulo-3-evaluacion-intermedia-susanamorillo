import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    callToApi().then((response) => {
      setCountries(response);
    });
  }, []);

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const renderCountries = () => {
    return countries
      .filter((eachCountry) =>
        eachCountry.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((eachCountry, index) => (
        <li key={index}>
          <p>{eachCountry.mame} </p>
          <p>{eachCountry.capital} </p>
          <p>{eachCountry.continent} </p>
        </li>
      ));
  };

  return (
    <>
      <header className='header'>
        <h1 className='title'>Country Info App</h1>
        <p>
          Explore information abour countries, capitals, and flags. Add new
          countries and filter through the list
        </p>
      </header>
      <main className='main'>
        <section>
          <form>
            <label htmlFor='search'>Country</label>
            <input
              type='search'
              name='search'
              value={search}
              onChange={handleSearch}
            />
            <label htmlFor='select'>Continent</label>
          </form>
        </section>
        <section>
          <ul className='list'>{renderCountries()}</ul>
        </section>
      </main>
    </>
  );
}

export default App;