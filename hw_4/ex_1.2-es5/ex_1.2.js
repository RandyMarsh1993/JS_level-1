'use strict';

/**
 * функция принимает параметры author, text и date и сохраняет их как свойстава объекта
 * также имеет метод edit, который принимает текст и записывает его в свойство text объекта
 * @param {string} author 
 * @param {tring} text 
 * @param {tring} date 
 * @returns {object}
 */
function Post(author, text, date) { 
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function(newText) {
	this.text = newText;
}

/**
 * функция принимает параметры author, text и date и сохраняет их как свойстава объекта
 * также имеет свойство highlighted, по умолчанию имеющее значение false
 * метод edit принимает текст и записывает его в свойство text объекта
 * метод makeTextHighlighted назначает свойству highlighted значение true
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 * @returns {object}
 */
function AttachedPost(author, text, date) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
	this.highlighted = true;
}

let somePost = new Post('John','some text', '18.06.2020');
console.log(somePost);

somePost.edit('some new text');
console.log(somePost);

let post_02 = new AttachedPost('Jane', 'another text', '18.06.2020');
console.log(post_02);

post_02.edit('NEW another text');
post_02.makeTextHighlighted();
console.log(post_02);