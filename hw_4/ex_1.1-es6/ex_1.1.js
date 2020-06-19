'use strict';

class Product {
	/**
	 * конструктор принимает параметры name и price и сохраняет их как свойства объекта
	 * метод make25PercentDiscount уменьшает цену (price) на 25 процентов
	 * @param {string} name 
	 * @param {number} price 
	 * @returns {object}
	 */
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	make25PercentDiscount() {
		this.price = this.price - this.price / 100 * 25;
	}
}

let product_01 = new Product('Honda', 30000);
let product_02 = new Product('Yamaha', 10000);
console.log(product_01);
console.log(product_02);

product_01.make25PercentDiscount();
product_02.make25PercentDiscount();

console.log(product_01);
console.log(product_02);