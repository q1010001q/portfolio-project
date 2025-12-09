const navLinks = document.querySelectorAll('.header__navLink')
const burgerMenu = document.querySelector('.header__burgerMenu')

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		// Закрыть бургер-меню
		burgerMenu.classList.toggle('is-active')
	})
})

document.getElementById('burger-btn').addEventListener('click', () => {
	burgerMenu.classList.toggle('is-active')
})

document.getElementById('downloadButton').addEventListener('click', () => {
	const link = document.createElement('a')
	link.href = 'assets/cv/kabashov-cv.pdf'
	link.download = 'kabashov-cv.pdf'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
})
