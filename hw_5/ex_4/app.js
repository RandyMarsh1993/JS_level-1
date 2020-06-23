'use strict';

/*
Использовал одну из страниц с самого первого задания вводного курса по верстке
*/

/*
После выполнения посмотрел решение. Мой код сильно отличается, зато всё сам сделал)
Как подзабуду просмотренное решение - попробую переписать Вашим способом))
*/

let products = document.querySelectorAll('.product-page');
let buttons = document.querySelectorAll('button');
let images = document.querySelectorAll('.product-page__image');

buttons.forEach((button, index) => {
	button.addEventListener('click', function() {
		toggleImageVisibility(index);
		if (buttons[index].innerHTML == 'Отмена') {
			deleteDescription(index);
		} else {
			getDescriptionText(index);
		}
		replaceButtonText(index);
	});
});

/**
 * функция добавляет элементу класс hiden если его нет
 * и удаляет его, если класс есть
 * @param {number} index 
 */
function toggleImageVisibility(index) {
	images[index].classList.toggle('hidden');
}

/**
 * функция меняет текст на кнопке
 * @param {number} index 
 */
function replaceButtonText(index) {
	if (buttons[index].innerHTML == 'Отмена') {
		buttons[index].innerHTML = 'Подробнее'
	} else {
		buttons[index].innerHTML = 'Отмена';
	}
}

/**
 * функция генерирует div с заданными классом и соержимым
 * и вставляет его со страницы
 * @param {number} index 
 */
function getDescriptionText(index) {
	let textDiv = document.createElement('div');
	textDiv.className = 'textDescription';
	textDiv.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quos modi ratione. Voluptatem, atque molestiae.';
	buttons[index].before(textDiv);
}

/**
 * функция удаляет элемент с заданным классом со страницы
 * @param {number} index 
 */
function deleteDescription(index) { 
	let description = products[index].querySelector('.textDescription');
	description.remove();
}