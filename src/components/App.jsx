import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setCountries(response);
    });
  }, []);

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };

  const renderCountries = () => {
    return countries
      .filter((eachCountry) =>
        eachCountry.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((eachCountry) =>
        eachCountry.continent.toLowerCase().includes(select.toLowerCase())
      )

      .map((eachCountry, index) => (
        <li className="countryList"key={index}>
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
            <select
              name='continent'
              id='continent'
              value={select}
              onChange={handleSelect}
            >
              <option value='All'>All</option>
              <option value='Africa'>Africa</option>
              <option value='North America'>North America</option>
              <option value='South America'>South America</option>
              <option value='Europe'>Europe</option>
              <option value='Asia'>Asia</option>
              <option value='Oceania'>Oceania</option>
            </select>
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
