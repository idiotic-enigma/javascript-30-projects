function debounce(func, wait = 20, immediate = true) {
	var timeout;

	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
	sliderImages.forEach(image => {
		/*	Equal to the vertical scroll height, plus the viewport height,
				then minus half the image height */
		const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
		const imageBottom = image.offsetTop + image.height;

		/*	Conditions are:
				- Image is at least half-visible on the page
				- Image has not been completely scrolled past
		*/
		if(slideInAt > image.offsetTop && window.scrollY < imageBottom) image.classList.add('active');
		else image.classList.remove('active');
	});
}

window.addEventListener('scroll', debounce(checkSlide));