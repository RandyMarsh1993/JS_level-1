'use strict';

/**
 * функция принимает параметры name и price и сохраняет их как свойства объекта
 * метод make25PercentDiscount уменьшает цену (price) на 25 процентов
 * @param {string} name 
 * @param {number} price 
 * @returns {object}
 */
function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
	this.price = this.price - this.price / 100 * 25;
}

let product_01 = new Product('Yamaha', 1000);
console.log(product_01);

product_01.make25PercentDiscount();
console.log(product_01);