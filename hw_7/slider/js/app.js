'use strict';

let sliderDiv = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
sliderDiv.insertAdjacentElement('afterbegin', loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
sliderDiv.insertAdjacentElement('afterbegin', leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
sliderDiv.insertAdjacentElement('afterbegin', rightArrow);

window.addEventListener('load', () => {
	loadIcon.style.display = 'none';
	slider.init();

	leftArrow.addEventListener('click', function() {
		slider.showNextLeftImage();
	});

	rightArrow.addEventListener('click', function() {
		slider.showNextRightImage();
	});
});

let slider = {
	currentIndex: 0,
	slides: [],

	init() {
		this.slides = document.querySelectorAll('.slider__item');
		this.setSizes(sliderDiv);
		this.showImageWithCurrentIndex();
	},

	showImageWithCurrentIndex() {
		this.slides[this.currentIndex].classList.remove('hidden');
	},

	showNextLeftImage() {
		this.hideVisibleImage();
		
		if (this.currentIndex === 0) {
			this.currentIndex = this.slides.length - 1;
		} else {
			this.currentIndex--;
		}
		let currentSlide = this.slides[this.currentIndex];
		currentSlide.classList.add('rightToLeft');
		currentSlide.classList.remove('hidden');
		setTimeout(() => {
			currentSlide.classList.remove('rightToLeft');
		}, 500);
		//this.showImageWithCurrentIndex();
	},

	showNextRightImage() {
		this.hideVisibleImage();
		if (this.currentIndex === this.slides.length - 1) {
			this.currentIndex = 0;
		} else {
			this.currentIndex++;
		}
		let currentSlide = this.slides[this.currentIndex];
		currentSlide.classList.add('leftToRight');
		currentSlide.classList.remove('hidden');
		setTimeout(() => {
			currentSlide.classList.remove('leftToRight');
		}, 500);
	},

	//немного отливается от решения на вебинаре (заметил, когда пересматривал его), но и так всё отлично работает)
	hideVisibleImage() {
		this.slides[this.currentIndex].classList.add('hidden');
	},

	setSizes(div) {
		let width = div.getAttribute('data-width');
		let height = div.getAttribute('data-height');

		if (width !== null && width !== '') {
			div.style.width = width;
		}
		if (height !== null && height !== '') {
			div.style.height = height;
		}
	}
};