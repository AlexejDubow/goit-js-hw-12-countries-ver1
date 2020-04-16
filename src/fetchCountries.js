const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries(query) {
    return fetch(baseUrl + query)
    .then(response => response.json());
  },
};
