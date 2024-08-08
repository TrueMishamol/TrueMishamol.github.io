//Make the DIV element draggagle:
// dragElement(document.getElementById("draggable"));

// Get all elements with the draggable attribute
// const draggableElements = document.querySelectorAll('[draggable]');
const draggableElements = document.querySelectorAll(".draggable");


start();

function start() {
	// Apply the dragElement function to each element
	draggableElements.forEach(element => {
		dragElement(element);
	});
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.addEventListener('mousedown', dragMouseDown);
	elmnt.addEventListener('touchstart', dragTouchStart, { passive: false });

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.addEventListener('mouseup', closeDragElement);
		// call a function whenever the cursor moves:
		document.addEventListener('mousemove', elementDrag);
	}

	function dragTouchStart(e) {
		e = e || window.event;
		e.preventDefault();
		// get the initial touch position:
		pos3 = e.touches[0].clientX;
		pos4 = e.touches[0].clientY;
		document.addEventListener('touchend', closeDragElement, { passive: false });
		// call a function whenever the finger moves:
		document.addEventListener('touchmove', elementTouchDrag, { passive: false });
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Get the margin values
		const marginLeft = parseInt(getComputedStyle(elmnt).marginLeft) || 0;
		const marginTop = parseInt(getComputedStyle(elmnt).marginTop) || 0;

		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1 - marginLeft) + "px";
		// elmnt.style.left = (elmnt.offsetLeft - pos1 - marginLeft - 1) + "px";
	}

	function elementTouchDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new touch position:
		pos1 = pos3 - e.touches[0].clientX;
		pos2 = pos4 - e.touches[0].clientY;
		pos3 = e.touches[0].clientX;
		pos4 = e.touches[0].clientY;

		// Get the margin values
		const marginLeft = parseInt(getComputedStyle(elmnt).marginLeft) || 0;
		const marginTop = parseInt(getComputedStyle(elmnt).marginTop) || 0;

		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1 - marginLeft) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.removeEventListener('mouseup', closeDragElement);
		document.removeEventListener('mousemove', elementDrag);
		document.removeEventListener('touchend', closeDragElement, { passive: false });
		document.removeEventListener('touchmove', elementTouchDrag, { passive: false });
	}
}