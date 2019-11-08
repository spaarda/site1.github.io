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


// SIDEBAR POST BLOCK
$('.sidebar-posts__btn1').on('click', function(){
	$(this).addClass('sidebar-posts-active');
	$('.sidebar-posts__btn2').removeClass('sidebar-posts-active');
	$('.sidebar-posts__btn3').removeClass('sidebar-posts-active');
	$('.sidebar-posts__latest').css('opacity', '1');
	$('.sidebar-posts__popular').css('opacity', '0');
	$('.sidebar-posts__comments').css('opacity', '0');
})

$('.sidebar-posts__btn2').on('click', function(){
	$(this).addClass('sidebar-posts-active');
	$('.sidebar-posts__btn1').removeClass('sidebar-posts-active');
	$('.sidebar-posts__btn3').removeClass('sidebar-posts-active');
	$('.sidebar-posts__latest').css('opacity', '0');
	$('.sidebar-posts__popular').css('opacity', '1');
	$('.sidebar-posts__comments').css('opacity', '0');
})

$('.sidebar-posts__btn3').on('click', function(){
	$(this).addClass('sidebar-posts-active');
	$('.sidebar-posts__btn2').removeClass('sidebar-posts-active');
	$('.sidebar-posts__btn1').removeClass('sidebar-posts-active');
	$('.sidebar-posts__latest').css('opacity', '0');
	$('.sidebar-posts__popular').css('opacity', '0');
	$('.sidebar-posts__comments').css('opacity', '1');
})



//   Слайдер
$('.testimonials__slider').slick({
	dots: true,
	arrows: false,
	dotsClass: 'testimonials__dots'
}); 