/*
TODO:
	- testimonials slider (https://swiperjs.com/)
*/


/* 
	Mobile nav 
	From: https://www.youtube.com/watch?v=DZg6UfS5zYg
*/
const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.nav__menu');
hamburger.addEventListener(
	'click',
	event => {
		menu.classList.toggle('show-menu');
		if(menu.classList.contains('show-menu')){
			hamburger.src = "images/icon-close.svg";
		}else{
			hamburger.src = "images/icon-hamburger.svg";
		}
	},false
);


/*
	Testimonials slider
*/

const slider = document.querySelector('.testimonials__slider');
const people = document.getElementsByClassName('testimonials__person');
const dots = document.getElementsByClassName('testimonials__dot');

//If we're on mobile and the slider has been scrolled
//either by clicking a dot or scrollin,
//then need to update the dots to filled or not based on which one is visible
slider.addEventListener(
	'scroll',
	event => {
		for(person of people){
			let personId = person.id.substring(person.id.length - 1);
			if(isInViewport(person)){
				dots[Number(personId)-1].classList.add('filled-dot');
			}else{
				dots[Number(personId)-1].classList.remove('filled-dot');
			}
		}
	},false
);


/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.left >= 0 &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};


/*
	Validate email input 
	From: https://daverupert.com/2017/11/happier-html5-forms/
*/
const email = document.querySelector('.footer__input');
const invalid = document.querySelector('.footer__invalid');
email.addEventListener(
	'invalid',
	event => {
		email.classList.add('error');
		invalid.style.visibility = "visible";
	},false
);