const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
	// Return if mouse is not pressed down
	if(!isDrawing) return;

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	ctx.closePath();

	[lastX, lastY] = [event.offsetX, event.offsetY];

	// Wrap hue back to 0 if greater than 360, else increment
	hue > 360 ? hue = 0 : hue++;

	// Threshold linewidth to increment / decrement between 1px to 100px
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
	direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', () => {
	isDrawing = true;
	[lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);