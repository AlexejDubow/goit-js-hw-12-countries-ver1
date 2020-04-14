import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';
export default function fetchCountries(searchQuery) {
  fetch(baseUrl + searchQuery)
    .then(response => {
      // console.log(response.json())
      return response.json();
    })
    .then(data => {
      let dataListCountry;
      // console.log(data.value);
      if (data.length > 10) {
        PNotify.error({
          title: '',
          text: 'Too many matches found. Please enter a more specific query!',
          hide: false,
        });
      } else if (data.length < 10 && data.length > 2) {
        PNotify.closeAll();
        dataListCountry = data.map(item => item.name);
        console.log(dataListCountry);

        // return dataListCountry;
        // return dataListCountry
        // console.log(dataListCountry);
      } else {
        dataListCountry = data.map(item => item.name);
        // console.log(dataListCountry);

        return dataListCountry;
        // return dataListCountry

        // console.log(dataListCountry)
      }
    });
}
// console.log(dataListCountry);
