import en from './en.json5';

const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');

titleElement.textContent = en.title;
descriptionElement.textContent = en.description;
