
import markupTemplate from './template.hbs';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import './styles.css';

const inputQuery = document.querySelector('.js-input');

inputQuery.addEventListener('input', debounce(showInput, 500));

function showInput() {
  console.log(inputQuery.value)
   const countries = fetchCountries(inputQuery.value);
  console.log(countries);
  return countries
  // buildMenu(countries)
  // console.log(fetchCountries);
}
function buildMenu(menu) {
  const markupMenu = menu.map(item => markupTemplate(item)).join('');
  inputQuery.insertAdjacentHTML('beforeend', markupMenu);
}
// buildMenu(countries)
