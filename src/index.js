// What
const h2 = document.querySelector('h2');
const colors = ['blue', 'green', 'purple', 'orange'];

// How
const superEventHandler = {
	handleOver: function () {
		h2.innerText = 'Mouse is Here.';
		h2.style.color = colors[0];
	},
	handleOut: function () {
		h2.innerText = 'Mouse is Gone.';
		h2.style.color = colors[1];
	},
	handleResize: function () {
		h2.innerText = 'Window is Resized.';
		h2.style.color = colors[2];
	},
	handleRightClick: function () {
		h2.innerText = 'Here is Context Menu.';
		h2.style.color = colors[3];
	},
};

// When
h2.addEventListener('mouseover', superEventHandler.handleOver);
h2.addEventListener('mouseleave', superEventHandler.handleOut);
window.addEventListener('resize', superEventHandler.handleResize);
window.addEventListener('contextmenu', superEventHandler.handleRightClick);
