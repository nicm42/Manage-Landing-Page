"use strict";

/* 
	Mobile nav 
	From: https://www.youtube.com/watch?v=DZg6UfS5zYg
*/
var hamburger = document.querySelector('.header__hamburger');
var menu = document.querySelector('.nav__menu');
hamburger.addEventListener('click', function (event) {
  menu.classList.toggle('show-menu');

  if (menu.classList.contains('show-menu')) {
    hamburger.src = "images/icon-close.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
}, false);
/*
	Testimonials slider
*/

var slider = document.querySelector('.testimonials__slider');
var people = document.getElementsByClassName('testimonials__person');
var dots = document.getElementsByClassName('testimonials__dot'); //Use intersection observer to check if a person is mostly in view
//If they are, then make that dot filled
//If not, make that dot empty
//Only applicable to mobile, as dots not visible on desktop

function onChange(changes, observer) {
  changes.forEach(function (change) {
    var personId = change.target.id.substring(change.target.id.length - 1);

    if (change.intersectionRatio > 0.5) {
      dots[Number(personId) - 1].classList.add('filled-dot');
    } else {
      dots[Number(personId) - 1].classList.remove('filled-dot');
    }
  });
}

var options = {
  threshold: 0.5 //update when half of the person is visible

};
var observer = new IntersectionObserver(onChange, options);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = people[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var person = _step.value;
    observer.observe(person);
  } //Scroll testimonials section when it's grabbed and slid (ie mousedown then move)
  //https://courses.wesbos.com/account/access/5ca4d00285f96c03c1e3d972/view/194158963

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var mouseDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (event) {
  mouseDown = true;
  slider.classList.add('active');
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function () {
  mouseDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', function () {
  mouseDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', function (event) {
  if (!mouseDown) {
    return;
  }

  event.preventDefault();
  var newX = event.pageX - slider.offsetLeft;
  var slide = (newX - startX) * 2;
  slider.scrollLeft = scrollLeft - slide;
});
/*
	Validate email input 
	From: https://daverupert.com/2017/11/happier-html5-forms/
*/

var email = document.querySelector('.footer__input');
var invalid = document.querySelector('.footer__invalid');
email.addEventListener('invalid', function (event) {
  email.classList.add('error');
  invalid.style.visibility = "visible";
}, false);