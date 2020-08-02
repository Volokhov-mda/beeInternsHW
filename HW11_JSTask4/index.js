// Задание 1
let i = 0;

for (0; i <= 50; i += 10) {
  console.log(i);
}
// Ожидаемый результат: 10 20 30 40 50

// Задание 2
/*
 Написать функцию-конструктор Men с ДВУМЯ аргументами
  С помощью которой можно создать объект
  { profession: 'hero', name: 'Кларк', secondName: 'Кент' }
*/

/* 
  Непонятно, каким образом надо задавать profession, если в функцию передается два аргумента.
  Наверное, если тема у нас была замекания, то надо брать профессию из глобального контекста, что я реализовал в функции.
  Если в задании все-таки требовалось, чтобы profession все время был 'hero', то функция должна возвращать:
  return { profession: 'hero', name: nameValue, secondName: secondNameValue };
*/
function Men(nameValue, secondNameValue) {
  return { profession: manProfession, name: nameValue, secondName: secondNameValue };
}

let manProfession = 'hero';
const superman = new Men('Кларк', 'Кент');
console.log('superman: ', superman);
// Men { profession: 'hero', name: 'Кларк', secondName: 'Кент' }


// Задание 3
// Напишите функцию sum, которая работает так: sum(a)(b) возвращает a + b.
let sum = function(firstNumber) {
  let sum = firstNumber;

  function _sum(secondNumber) {
    sum += secondNumber;
    return _sum;
  }

  _sum.toString = function() { return sum; };

  return _sum;
}

console.log(sum(1)(2).toString());  // 3
console.log(sum(5)(-1).toString()); // 4


// Задание 4
// Измените код так, чтобы console.log выводил последовательно символы 'П т и ц а'
const bird = ['П', 'т', 'и', 'ц', 'а'];

for (var index = 0; index < bird.length; index++) {
  const _index = index;
  setTimeout(() => {
    console.log(bird[_index]);
  }, 100);
}