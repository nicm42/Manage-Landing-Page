/*
TODO:
	- nav
	- testimonials slider
	- updates email validation (see active-states.jpg)
*/


/* validate email input 
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