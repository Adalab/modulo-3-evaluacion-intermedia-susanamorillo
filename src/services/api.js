const callToApi = () => {
  return fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flag,continents,cca2'
  )
    .then((response) => response.json())
    .then((response) => {
      const country = response.map((country) => ({
        name: country.name.common,
        capital: country.capital[0],
        continent: country.continents[0],
        id: country.cca2,
      }));

      return country;
    });
};

export default callToApi;
