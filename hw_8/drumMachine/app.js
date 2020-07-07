'use strict';

function playSound(event) {
	//получаем тег аудио, дата-атрибут которого равен коду нажатой клавиши
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	//аналогично получаем блок, соответствующий нажатой клавише
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!audio) {
		return; //если нажатой клавише не соответствует аудиофайл - прекращаем выполнение функции
	}

	//устанавливаем свойство currentTime = 0, чтобы при повторном вызове фунции аудиофайл проигрывался с начала, даже если его воспроизведение ещё не закончилось
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

/**
 * функция возвращает блок клавиши проигрываемого звука к исходному состоянию
 * @param {*} event 
 */
function keyToInitialCondition(event) {
	if (event.propertyName !== 'transform') {
		return;
	}
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
//по окончанию действия свойства transition для каждого из блоков клавиш вызываем функцию возврата к исходному состоянию
keys.forEach((key) => {
	key.addEventListener('transitionend', keyToInitialCondition);
});

window.addEventListener('keydown', playSound);