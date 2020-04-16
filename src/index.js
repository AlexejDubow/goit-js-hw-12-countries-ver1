import fetchCountries from './fetchCountries';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import countryListTemplate from './templates/countryList.hbs';
import countryInfoTemplate from './templates/countryInfo.hbs';

import debounce from 'lodash.debounce';
import './styles.css';

const refs = {
  queryInput: document.querySelector('.js-input'),
  markupCountryList: document.querySelector('.js-countryList'),
};
refs.queryInput.addEventListener('input', debounce(serchCountry, 500));

function serchCountry(e) {
  const input = e.target.value;
  if (input) {
    fetchCountries.fetchCountries(input).then(data => {
      if (data.length > 10) {
        pnotifyClose();
        pnotifyError();
        clearMarkup();
      } else if (data.length < 10 && data.length > 2) {
        pnotifyClose();
        clearMarkup();
        const countryName = data.map(item => item.name);
        const markupCountryName = buildCountryList(countryName);
        refs.markupCountryList.insertAdjacentHTML(
          'beforeend',
          markupCountryName,
        );
      } else {
        pnotifyClose();
        clearMarkup();
        buildCountryInfo(data);
      }
    });
  }
}

function buildCountryList(items) {
  return countryListTemplate(items);
}
function buildCountryInfo(items) {
  const markupCountryInfo = countryInfoTemplate(items);
  refs.markupCountryList.insertAdjacentHTML('beforeend', markupCountryInfo);
}

function clearMarkup() {
  refs.markupCountryList.innerHTML = '';
}
function pnotifyError() {
  PNotify.error({
    title: '',
    text: 'Too many matches found. Please enter a more specific query!',
    hide: false,
  });
}

function pnotifyClose() {
  PNotify.closeAll();
}
