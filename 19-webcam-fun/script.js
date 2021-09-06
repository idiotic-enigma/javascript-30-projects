const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('.controls button');

function getVideo() {
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
		.then(localMediaStream => {
			console.log(localMediaStream);
			video.src = window.URL.createObjectURL(localMediaStream);
			video.play();
		})
		.catch(error => { console.error('Camera missing, or access was denied.', error); })
	;
}

function paintToCanvas() {
	const {videoWidth: width, videoHeight: height } = video;
	canvas.width = width;
	canvas.height = height;
	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height)
		let pixels = ctx.getImageData(0, 0, width, height);
		pixels = redEffect(pixels);
	}, 16);
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();
	const data = canvas.toDataURL('image/jpg');
	const link = document.createElement('a');
	const image = document.createElement('img');
	link.href = data;
	link.setAttribute('download', 'handsome');

	image.src = data;
	image.alt = '';

	link.appendChild(image);
	strip.insertBefore(link, strip.firstChild);
}

// Filter Effects
function redFilter(pixels = []) {
	for(i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i] += 100			// R
		pixels.data[i + 1] -= 50	// G
		pixels.data[i + 2] *= .5	// B
	}
	return data;
}

function rgbSplit(pixels) {
	for(i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 150] = pixels.data[i]			// R
		pixels.data[i + 100] = pixels.data[i + 1]	// G
		pixels.data[i - 150] = pixels.data[i + 2]	// B
	}
	return data;
}

function greenScreen(pixels) {
	const levels = {};

	document.querySelectorAll('.rgb input')
		.forEach((input) => { levels[input.name] = input.value; })
	;

	for (i = 0; i < pixels.data.length; i = i + 4) {
		red =	pixels.data[i + 0];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha =	pixels.data[i + 3];

		if (
			red >= levels.rmin
			&& green >= levels.gmin
			&& blue >= levels.bmin
			&& red <= levels.rmax
			&& green <= levels.gmax
			&& blue <= levels.bmax
		) { pixels.data[i + 3] = 0; }
	}
	return pixels;
}

document.addEventListener('DOMContentLoaded', getVideo);
video.addEventListener('canplay', paintToCanvas);
button.addEventListener('click', takePhoto);