export default class Render {
  static addToList(scores) {
    const list = document.getElementById('list');
    list.innerHTML = `<li><p>${scores.name}: ${scores.score}</p></li>`;
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.score-form');
    const form = document.getElementById('submit-data');
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}
