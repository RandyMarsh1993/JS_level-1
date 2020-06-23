'use strict';

let popup = document.querySelector('.popup');
let showButton = document.getElementById('showButton');
let closeButton = document.getElementById('closeButton');

function showPopup() {
	popup.classList.remove('animate__fadeOutBottomRight');
	popup.classList.remove('popup_hidden');
	popup.classList.add('animate__fadeInDown');
}

function hidePopup() {
	popup.classList.remove('animate__fadeInDown');
	setTimeout(() => popup.classList.add('popup_hidden'), 1000);
	popup.classList.add('animate__fadeOutBottomRight');
}

showButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);