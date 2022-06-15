
import './index.css';

const list = document.getElementById('list');
const gameScore = document.getElementById('score');
const name = document.getElementById('name');
const postData = document.querySelector('form');
const refresh = document.getElementById('refresh');

const id = 'tpbH0M4HiGifjDCgz6QP';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const sendData = () => {
  postData.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: name.value,
        score: gameScore.value,
      }),
    });
    postData.reset();
  });
};

sendData();

const fetchData = async () => {
  const game = await fetch(url);
  const data = await game.json();
  list.innerHTML = '';
  data.result.forEach((e) => {
    list.innerHTML += `<li><p>${e.user}</p> <p>${e.score}</p></li>`;
  });
};

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData();
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  fetchData();
});
