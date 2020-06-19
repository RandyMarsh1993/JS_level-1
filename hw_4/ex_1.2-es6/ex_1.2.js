'use strict';

class Post {
	/**
	 * функция принимает параметры author, text и date и сохраняет их как свойстава объекта
	 * также имеет метод edit, который принимает текст и записывает его в свойство text объекта
	 * @param {string} author 
	 * @param {string} text 
	 * @param {string} date 
	 */
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	edit(text) {
		this.text = text;
	}
}

class AttachedPost extends Post {
	/**
	 * функция принимает параметры author, text и date и сохраняет их как свойстава объекта
	 * также имеет свойство highlighted, по умолчанию имеющее значение false
	 * метод edit принимает текст и записывает его в свойство text объекта
	 * метод makeTextHighlighted назначает свойству highlighted значение true
	 * @param {string} author 
	 * @param {string} text 
	 * @param {string} date 
	 */
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}

	makeTextHighlighted() {
		this.highlighted = true;
	}
}

let post_01 = new Post('Jack', 'lorem', Date());
console.log(post_01);

post_01.edit('lorem ipsum');
console.log(post_01);

let post_02 = new AttachedPost('Stiven', 'some text', Date());
console.log(post_02);

post_02.edit('some NEW text');
post_02.makeTextHighlighted();
console.log(post_02);