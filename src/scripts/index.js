// JavaScript to display current UTC time
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const currentTime = new Date().getTime();
currentUTCTimeElement.textContent = currentTime;
