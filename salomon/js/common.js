jQuery(document).ready(function() {
	new WOW().init();
});

//畫面捲動相關
$(document).ready(function () {
	//Nav scroll to ID
	$('a.page-scroll').bind('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
	});

	//Slider
	var owl = $('.owl-carousel.product');
	owl.owlCarousel({
		nav: true,
		loop: true,
		navText: false,
		//autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,

		responsiveClass:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

	//Tab
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})


	//當是手機時
	var allMOBILE = window.matchMedia( "(max-width: 780px)");

	if (allMOBILE.matches) {
		//Menu
		$(".mMenu").click(function(){
			$(".nav-menu").stop().animate({opacity:"1", left:"0", display:"block"},100);
			return false;
		});
		$(".close").click(function(){
			$(".nav-menu").stop().animate({opacity:"0", left:"-100%", display:"none"},100);
			return false;
		});
		$(".nav-menu .mNav a").click(function(){
			$(".nav-menu").stop().animate({opacity:"0", left:"-100%", display:"none"},100);
			return false;
		});
	};


	//控制gotop
	$(window).scroll(function() {
		var scrollVal = $(this).scrollTop();
		var FooterHeight = $("footer").outerHeight();
		var PageHeight = $(document).height();
		var WinHeight = $(window).height();
		var fixHeight = PageHeight - FooterHeight - WinHeight;
		console.log(scrollVal,PageHeight,FooterHeight,WinHeight,fixHeight);
		
		if ( scrollVal >= fixHeight ){
		   $(".gotop").stop().addClass("unfixed");
		   return false;
		}
		if ( scrollVal >= 300 && scrollVal < fixHeight ){
		   $(".gotop").stop().removeClass("unfixed").animate({right:"30px"},200);
		   return false;
		}
		if ( scrollVal < 300 ){
		   $(".gotop").stop().animate({right:"-100px"},200);
		   return false;
		}
	});
	$(".gotop").click(function(){
		$("html,body").animate({scrollTop:0},800);
		$(this).stop().removeClass("unfixed").animate({right:"-100px"},10);
		return false;
	});
});


$(document).ready(function () {
	var owl = $('.owl-carousel.kv');
	owl.owlCarousel({
		nav: true,
		loop: true,
		navText: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplaySpeed: 8000,
		items:1,
		animateOut: 'fadeOut',
		smartSpeed:450,

		responsiveClass:true,
		responsive:{
			0:{
			touchDrag: true,
			pullDrag: true,
			mouseDrag: true
			}
		}
	})
});


