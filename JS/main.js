$(function()
	{
		$('.slider_inner').slick(
			{
				nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
				prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
				rows: 1,
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				// speed: 600,
				// autoplay: true,
				// autoplaySpeed: 5000,
				arrows: false,
				dots: true,
				swipe: true,
				swipeToSlide: true,
				pauseOnHover: true,
				pauseOnDotsHover: true,
				infinite: false,
			})
	});