'use strict'

//получаем элементы, соответствующие стрелкам часов
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/**
 * функция устанавливает стрелки часов в соответствии с полученными данными
 */
function setDate() {
	const now = new Date();

	//получаем часы, минуты и секунды из объекта Date
	const seconds = now.getSeconds();
	const mins = now.getMinutes();
	const hours = now.getHours();

	//высчитываем положения часовой, минутной и секундной стрелок на циферблате
	let secondHandPosition = ((seconds / 60) * 360) + 90;
	let minHandPosition = ((mins / 60) * 360) + 90;
	let hourHandPosition = ((hours / 12) * 360) + 90;

	//применяем к элементам стрелок свойство transform со значением rotate и полученными выше градусами
	secondHand.style.transform = `rotate(${secondHandPosition}deg)`;
	minHand.style.transform = `rotate(${minHandPosition}deg)`;
	hourHand.style.transform = `rotate(${hourHandPosition}deg)`;
}

//вызываем функцию с интервалом 1 секунда
setInterval(setDate, 1000);