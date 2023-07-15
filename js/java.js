// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

const login = 'sasha';
const password = 12345;

const userLogin = prompt('Введіть логін');
const userPassword = Number(prompt('Введіть пароль'));

// if (userLogin === login && password === userPassword) {
//   console.log('Вірно');
// } else {
//   console.log('Помилка');
// }

const resolt =
  userLogin === login && userPassword === password ? 'Вірно' : 'Помилка';
console.log(resolt);
