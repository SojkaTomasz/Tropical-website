const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');

const showNav = () => {
	nav.classList.toggle('nav--show');

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--show');
		});
	});
	animation();
};

const animation = () => {
	let delayTime = 0;
	navItem.forEach((item) => {
		item.classList.toggle('nav__item--animation-nav');
		item.style.animationDelay = `0.${delayTime}s`;
		delayTime++;
	});
};

const deleteAnimation = () => {
	navItem.forEach((item) => {
		item.classList.remove('nav__item--animation-nav');
	});
};

navBtn.addEventListener('click', showNav);
