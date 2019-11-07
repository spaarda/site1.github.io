$('.category__listbtn1').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'block');
});

$('.category__listbtn2').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'none');
	$('.category__webdesign').css('display' , 'block');
});

$('.category__listbtn3').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'none');
	$('.category__graphicdesign').css('display' , 'block');
});

$('.category__listbtn4').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'none');
	$('.category__fashion').css('display' , 'block');
});

$('.category__listbtn5').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'none');
	$('.category__logodesign').css('display' , 'block');
});

$('.category__listbtn6').on('click', function(){
	$('.category__listbtn').removeClass('category__list-active');
	$(this).addClass('category__list-active');
	$('.category__item').css('display' , 'none');
	$('.category__advertising').css('display' , 'block');
});

$('.top-menu__blockicon').on('click', function(){
	$('.top-menu__list').toggleClass('top-menu__list-active');
	$('.top-menu__icon').toggleClass('top-menu__icon-active');
});

$('.testimonials__slider').slick({
	dots: true,
	arrows: false,
	dotsClass: 'testimonials__dots'
}); 