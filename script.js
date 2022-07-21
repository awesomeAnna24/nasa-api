'use strict';

//Create event listener
document.querySelector('button').addEventListener('click', getApod);
function getApod() {
  const date = document.querySelector('input').value;
  //fetch api from nasa servers
  fetch(
    //When user clicks apod, get the p of that specific date
    `https://api.nasa.gov/planetary/apod?api_key=889eoqBR5EpmgDhIYTQ8WmXSk7XTSHzcKKeqOpbk&date=${date}`
  )
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('span').innerText =
        document.querySelector('input').value;
      //create a conditional to accomodate video media
      if (data.media_type === 'video') {
        document.querySelector('iframe').classList.remove('hidden');
        document.querySelector('iframe').src = data.url;
      } else {
        document.querySelector('iframe').classList.add('hidden');
        document.querySelector('img').classList.remove('hidden');
        document.querySelector('img').src = data.url;
      }
      document.querySelector('p').innerText = data.explanation;
    })
    .catch((err) => console.log(`Error ${err}`));
}
