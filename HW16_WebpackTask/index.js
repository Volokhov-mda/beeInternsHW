import header from './templates/header.html';

let headerEl = document.createElement('header')
headerEl.innerHTML = header;
document.getElementById('container').appendChild(headerEl);

import('./styles/header.css');
import('./styles/styles.css');
// import('./styles/roboto.css')
