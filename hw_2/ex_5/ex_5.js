'use strict';

//для испльзования программы необходимо нажать на кнопку в ex_5.html

//не стал документировать слишком простые функции с говорящими названиями
function getSum(a, b) {
	return a + b;
}

function getDifference(a, b) {
	return a - b;
}

function getQuotient(a, b) {
	return a / b;
}

function getProduct(a, b) {
	return a * b;
}

/**
 * функция принимает два числовых параметра и один строчный.
 * в зависимости от переданного значения операции производит с числовыми параметрами
 * одну из арифметических операций.
 * @param {number} a 
 * @param {number} b 
 * @param {string} opertion доступны операции: +, -, /, *.
 * @returns {number}
 */
function mathOperation(a, b, opertion) {
	a = +prompt('введите первое число');
	opertion = prompt('введите знак арифметической операции \nдоступны операции: +, -, /, *')
	b = +prompt('введите второе число');
	
	switch (opertion) {
		case '+':
			alert(getSum(a, b));
			console.log(getSum(a, b));
			break;
		case '-':
			alert(getDifference(a, b));
			console.log(getDifference(a, b));
			break;
		case '/':
			alert(getQuotient(a, b));
			console.log(getQuotient(a, b));
			break;
		case '*':
			alert(getProduct(a, b));
			console.log(getProduct(a, b));
			break;
		default:
			alert('программа не поддерживает операцию ' + opertion);
	}
}