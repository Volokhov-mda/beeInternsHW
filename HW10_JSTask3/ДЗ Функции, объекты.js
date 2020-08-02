// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
  // В первом же уровне решил задачу в общем виде, ибо привык к принципам ООП :)
  // Сложно даже догадаться, как решить это иначе, не в общем виде.
  // Наверное, подразумевается, что нам известен объект, тогда можно было бы сделать так:
  // return { inputObject['one']: 'one' };
  // Но получается абсолютно бесполезная функция, ибо в качестве аргумента в функцию можно вложить только
  // объект с ключом 'one'. Хотя, сейчас изучается JS с азов, поэтому, думаю, так и надо было сделать.

  const keys = Object.keys(inputObject);
  const values = Object.values(inputObject);
  const newObject = {};

  for (let i = 0; i < keys.length; i++) { newObject[values[i]] = keys[i] } 

  return newObject;
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
  // Первую функцию уже написал в общем виде, так что без проблем можно просто вызвать ее.
  return resolve1(inputObject);
};

const result2 = resolve2(secondObject);
console.log(result2); 
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(secondObject);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math
function centuryFromYear(year) {
  return Math.floor(year / 100) + (year % 100 === 0 ? 0 : 1);
};

const year = 1905;
console.log(centuryFromYear(year)); // 20

const year2 = 1700;
console.log(centuryFromYear(year2)); // 17.
