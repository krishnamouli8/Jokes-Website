'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const jokeBtn = document.querySelector('button');
  const jokeDiv = document.querySelector('.joke');

  jokeBtn.addEventListener('click', fetchJoke);

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      jokeDiv.textContent = data.joke;
    })
    .catch(error => console.error('Error fetching joke:', error));
  }
});