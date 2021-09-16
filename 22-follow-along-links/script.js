const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function moveHighlight() {
	const clientRect = this.getBoundingClientRect();
	const attributes = {
		x: clientRect.left + window.scrollX,
		y: clientRect.top + window.scrollY,
		width: clientRect.width,
		height: clientRect.height
	};

	highlight.style.width = `${attributes.width}px`;
	highlight.style.height = `${attributes.height}px`;
	highlight.style.transform = `translate(${attributes.x}px, ${attributes.y}px)`;
}

triggers.forEach( link => link.addEventListener('mouseenter', moveHighlight) );