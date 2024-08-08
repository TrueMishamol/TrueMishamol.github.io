// Get all buttons with the data-popup attribute
const buttons = document.querySelectorAll('.popup_button');

buttons.forEach(button => {
	button.addEventListener('click', function () {
		const popupType = this.getAttribute('data-popup'); // Get the value of data-popup
		const popup = document.querySelector(`.popup[data-popup="${popupType}"]`); // Find the related popup
		if (popup) {
			// popup.style.display = 'block'; // Display popup
			popup.classList.add('show'); // Add the show class to display popup
		}
	});
});

// Close button
document.querySelectorAll('.popup_close').forEach(button => {
	button.addEventListener('click', function () {
		const popup = this.closest('.popup'); // Находим поп-ап

		// Убираем класс show для начала анимации исчезновения
		popup.classList.add('hiding');
		popup.classList.remove('show');

		// // Устанавливаем таймер на 0.5 секунды
		// setTimeout(() => {
		// 	popup.classList.remove('hiding');
		// }, 500); // 500 миллисекунд


		// Добавляем обработчик события transitionend
		popup.addEventListener('transitionend', function () {
			// После завершения анимации скрываем поп-ап
			// popup.style.visibility = 'hidden'; // Скрываем поп-ап
			popup.classList.remove('hiding');

		}, { once: true }); // Удаляем обработчик после первого срабатывания
	});
});
