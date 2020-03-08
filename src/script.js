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

//Use intersection observer to check if a person is mostly in view
//If they are, then make that dot filled
//If not, make that dot empty
//Only applicable to mobile, as dots not visible on desktop
let isMobile = window.matchMedia("only screen and (max-width: 640px)").matches;

if (isMobile) {
	function onChange(changes, observer) {
		changes.forEach((change) => {
			let personId = change.target.id.substring(change.target.id.length - 1);
			if (change.intersectionRatio > 0.5) {
				dots[Number(personId)-1].classList.add('filled-dot');
			}else{
				dots[Number(personId)-1].classList.remove('filled-dot');
			}
		});
	}
	let options = {
		threshold: 0.5  //update when half of the person is visible
	};
	let observer = new IntersectionObserver(onChange, options);
	for (let person of people) {
		observer.observe(person);
	}
}

//Scroll testimonials section when it's grabbed and slid (ie mousedown then move)
//https://courses.wesbos.com/account/access/5ca4d00285f96c03c1e3d972/view/194158963
let mouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
	mouseDown = true;
	slider.classList.add('active');
	startX = event.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
	mouseDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	mouseDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (event) => {
	if(!mouseDown){return;}
	event.preventDefault();
	let newX = event.pageX - slider.offsetLeft;
	let slide = (newX - startX) * 2;
	slider.scrollLeft = scrollLeft - slide;
});

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