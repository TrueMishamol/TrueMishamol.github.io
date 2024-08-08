//Make the DIV element draggagle:
// dragElement(document.getElementById("draggable"));

// Get all elements with the draggable attribute
// const draggableElements = document.querySelectorAll('[draggable]');
const draggableElements = document.querySelectorAll(".draggable");


start();

function start(){
// Применяем функцию dragElement к каждому элементу
draggableElements.forEach(element => {
	dragElement(element);
	console.log("Привет, мир!");
  });
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		const marginLeft = parseInt(getComputedStyle(elmnt).marginLeft) || 0;


		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Получаем значения margin
		const marginLeft = parseInt(getComputedStyle(elmnt).marginLeft) || 0;
		const marginTop = parseInt(getComputedStyle(elmnt).marginTop) || 0;

		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1 - marginLeft) + "px";
		// elmnt.style.left = (elmnt.offsetLeft - pos1 - marginLeft - 1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}