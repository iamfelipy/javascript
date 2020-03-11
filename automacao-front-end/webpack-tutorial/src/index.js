const { sayHelloTo } = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHelloTo('JavaScript Developer');

document.body.appendChild(span);