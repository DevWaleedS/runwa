//  Initialize Swiper

var swiper = new Swiper('.service-swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: false,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

// Initialize the AOS
AOS.init();
