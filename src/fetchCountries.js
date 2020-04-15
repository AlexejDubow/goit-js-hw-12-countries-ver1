
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries(query) {
    return fetch(baseUrl + query).then(response => response.json());
  },
};

// inputQuery.addEventListener('input', debounce(showInput, 500));

// function showInput() {
//   fetch(baseUrl + inputQuery.value)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       let dataListCountry;
//       if (data.length > 10) {
//         PNotify.error({
//           title: '',
//           text: 'Too many matches found. Please enter a more specific query!',
//           hide: false,
//         });
//       } else if (data.length < 10 && data.length > 2) {
//         PNotify.closeAll();
//         dataListCountry = data.map(item => item.name);
//         console.log(dataListCountry);
//         buildMenu(dataListCountry);
//       } else {
//         dataListCountry = data.map(item => item.name);
//       }
//     });
// }

