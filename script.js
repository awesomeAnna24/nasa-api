'use strict';
//fetch api from nasa servers
const date = document.querySelector('input').value;
const url = `https://api.nasa.gov/planetary/apod?api_key=AHRztZy0Y5bHCUzxAfEHzLaXfeS7JuBOQYn9wzaq&date=${date}`;
//When user clicks apod, get the p of that specific date
//Create event listener
document.querySelector('button').addEventListener('click', getApod);
function getApod() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (date === data.date) {
        document.querySelector('span').innerText =
          document.querySelector('input').value;
        //create a conditional to accomodate video media
        if (data.media_type === 'video') {
          document.querySelector('iframe').classList.remove('hidden');
          document.querySelector('iframe').src = data.url;
        } else {
          document.querySelector('img').classList.remove('hidden');
          document.querySelector('img').src = data.hdurl;
        }
        document.querySelector('p').innerText = data.explanation;
      } else return;
    })
    .catch((err) => console.log(`Error ${err}`));
}
