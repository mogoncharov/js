const consoleLogButton = document.getElementById('consoleLog');
const alertButton = document.getElementById('alert');
const promptButton = document.getElementById('prompt');

consoleLogButton.addEventListener('click', () => {
    alert('console.log выводит информацию в консоль браузера.');
});

alertButton.addEventListener('click', () => {
    alert('Alert() выводит окно с сообщением.');
});

promptButton.addEventListener('click', () => {
    alert('Prompt() выводит окно с запросом ввода текста.');
});

function goBack() {
    window.history.back();
  }