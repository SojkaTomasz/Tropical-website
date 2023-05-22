const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');
const barsBtn = document.querySelector('.nav-btn__bars');
const sectionAll = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const showNav = () => {
	nav.classList.toggle('nav--show');
	barsBtn.classList.remove('dark-bars');
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

const colorBarsBtn = () => {
	const srcollWindow = window.scrollY;
	sectionAll.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= srcollWindow + 60
		) {
			barsBtn.classList.add('dark-bars');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= srcollWindow + 20
		) {
			barsBtn.classList.remove('dark-bars');
		}
	});
};

const getYers = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year + ' ';
};

getYers();
navBtn.addEventListener('click', showNav);
window.addEventListener('scroll', colorBarsBtn);
