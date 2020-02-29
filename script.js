/*
TODO:
	- nav
	- testimonials slider
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