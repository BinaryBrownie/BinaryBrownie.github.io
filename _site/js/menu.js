let burger = document.getElementById('burger')
let nav = document.getElementById('main-nav')

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

nav.addEventListener('click', function(e){
	burger.classList.remove('is-open');
	this.classList.remove('is-open');
});