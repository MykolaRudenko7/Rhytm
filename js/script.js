"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {

	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHight: true,
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}