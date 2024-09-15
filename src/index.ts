import { fetchWeather } from './weatherService';
import { renderWeather, renderError } from './weatherComponent';

document.getElementById('search-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = (document.getElementById('city') as HTMLInputElement).value;

  const weather = await fetchWeather(city);
  if (weather) {
      renderWeather(weather);
  } else {
      document.getElementById('error')!.textContent = 'City not found. Please try again.';
      document.getElementById('weather')!.innerHTML = '';
  }
});

