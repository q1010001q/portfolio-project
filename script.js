document.getElementById('burger-btn').addEventListener('click', () => {
	document.querySelector('.header__burgerMenu').classList.toggle('is-active')
})

document.getElementById('downloadButton').addEventListener('click', () => {
	const link = document.createElement('a')
	link.href = 'assets/cv/kabashov-cv.pdf' // Укажите путь к вашему файлу
	link.download = 'kabashov-cv.pdf' // Имя, под которым файл будет сохранен
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
})
