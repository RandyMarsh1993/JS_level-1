'use strict';

/**
 * функция получает число и преобразует его в объект, параметрами которого являются разряды числа.
 * @param {number} num принимаемое число. Должно быть целым числом от 0 до 999
 * @returns {object} объект с параметрами units, tens, hundreds
 */
function convertNumberIntoObject(num) {
	if (num < 0 || num > 999) {
		console.log(`Число ${num} не попадает в заданный диапазон.\nНадо было ввести целое число в диапазоне от 0 до 999`);
		return {};
	} else if (isNaN(num)) {
		console.log(`${num} не является числом.\nНадо было ввести целое число в диапазоне от 0 до 999`);
		return {};
	} else if (!Number.isInteger(num)) {
		console.log(`Число ${num} не является целым.\nНадо было ввести целое число в диапазоне от 0 до 999`);
		return {};
	} else {
		return {
			units: Math.floor(num % 10),
			tens: Math.floor((num % 100) / 10),
			hundreds: Math.floor(num / 100),
		}

	}
}

console.log(convertNumberIntoObject(369));
console.log(convertNumberIntoObject(1000));
console.log(convertNumberIntoObject('строка'));
console.log(convertNumberIntoObject(3.45));