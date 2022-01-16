// run `node index.js` in the terminal
// console.log(`Hello Node.js v${process.versions.node}!`);

// 1. ШАГ. Подключаем Express
const express = require('express');

// 2. ШАГ. Создаем объект приложения
const app = express();

// 4. ШАГ. Создаем первое route приложение
// 4.1 ШАГ. Первый параметр get запроса  -
// адрес страницы на которую мы переходим
app.get('/', function (request, response) {
  // console.log('req', request);
  // console.log('res', response);
  response.send('<h1>Hello Server</h1>');
});
// 3. ШАГ. Запуск приложения на орпеделенном порту
app.listen(3000);
