document.write('<h2>Завдання 1:</h2>')
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);
document.write ('<h2> Результат: '+ alphaNumeric +'</h2>')

document.write('<h2>Завдання 2:</h2>')
var arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);
document.write ('<h2> Результат: '+ arr +'</h2>')

document.write('<h2>Завдання 3:</h2>')
let arr1 = [1 , 2 ,3];
arr1.reverse();
console.log(arr1);
document.write ('<h2> Результат: '+ arr1 +'</h2>')


document.write('<h2>Завдання 4:</h2>')
let arr2 = ['js', 'css', 'jq'];
let del = arr2.pop();
console.log(del);
document.write ('<h2> Результат: '+ del +'</h2>')

document.write('<h2>Завдання 5:</h2>')
let arr3 = [1, 2, 3, 4, 5];
let sub = arr3.slice(3);
console.log(sub);
document.write ('<h2> Результат: '+ sub +'</h2>')

document.write('<h2>Завдання 6:</h2>')
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 2);
console.log(arr4);
document.write ('<h2> Результат: '+ arr4 +'</h2>')

document.write('<h2>Завдання 7:</h2>')
let arr5 = [1, 2, 3, 4, 5];
let del1 = arr5.splice(1, 3);
console.log(del1);
document.write ('<h2> Результат: '+ del1 +'</h2>')

document.write('<h2>Завдання 8:</h2>')
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(3, 0, 'a', 'b', 'c');
console.log(arr6);
document.write ('<h2> Результат: '+ arr6 +'</h2>')

document.write('<h2>Завдання 9:</h2>')
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 4,'a','b', 2, 3, 4,'c', 5,'e');
console.log(arr7);
document.write ('<h2> Результат: '+ arr7 +'</h2>')

document.write('<h2>Завдання 10:</h2>')
let arr8 = [3, 4, 1, 2, 7];
arr8.sort();
console.log(arr8);
document.write ('<h2> Результат: '+ arr8 +'</h2>')