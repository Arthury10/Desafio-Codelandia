/*Mark Favorite*/
const markBtnFavorite = document.querySelectorAll('.markBtnFavorite')

markBtnFavorite.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('ativoSVG')
	})
})

/*Animando scroll mouse*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.85

		function animaScroll() {
			sections.forEach(section => {
				section.classList.add('desativo')
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				if (isSectionVisible) {
					section.classList.add('ativo')
					section.classList.remove('desativo')
				} else {
					section.classList.remove('ativo')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}

initAnimacaoScroll()
