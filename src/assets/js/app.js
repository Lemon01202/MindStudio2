window.onscroll = function showHeader() {
	var scroll = document.querySelector('.header');
	var color = document.querySelector('.nav__link');
	if(window.pageYOffset > 20){
		scroll.classList.add('header__fixed');
		color.classList.add('change__color');
	}else{
		scroll.classList.remove('header__fixed');
		color.classList.remove('change__color');
	}
}