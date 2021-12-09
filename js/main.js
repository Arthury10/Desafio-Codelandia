/*Mark Favorite*/

/*Animando scroll mouse*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.75

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

/*puxando noticias pela api techtudo*/
//https://www.infoq.com/br/WebAPI/news/

fetch(
	'https://newsapi.org/v2/everything?q=apple&from=2021-12-08&to=2021-12-08&sortBy=popularity&apiKey=fae2462f1349499a808d24233b2a1935'
)
	.then(response => {
		return response.json()
	})
	.then(body => {
		const { articles } = body
		const noticias = document.querySelector('.main-bg')
		articles.forEach(item => {
			const { title, url, description, publishedAt } = item
			const template = `
			<div class="main container js-scroll news">
			<div class="date-mark">
				<span class="color-5">${publishedAt}</span>
				<svg
					class="markBtnFavorite"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#574AE8"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-heart"
				>
					<path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					></path>
				</svg>
			</div>
			<div class="text-title">
				<h1 class="color-8 news-title">
					${title}
				</h1>
				<p class="color-5 text-p news-description">
					${description}
				</p>
				<a href="${url}" class="btn-link">Acessar</a>
			</div>
		</div>
			`
			noticias.innerHTML += template

			const markBtnFavorite = document.querySelectorAll('.markBtnFavorite')

			markBtnFavorite.forEach(item => {
				item.addEventListener('click', () => {
					item.classList.toggle('ativoSVG')
				})
			})

			const input = document.querySelector('#search')
			input.addEventListener('keyup', function (e) {
				let inputValue = e.target.value.toLowerCase()
				let list = document.querySelectorAll('.news')
				list.forEach(item => {
					let title = item.querySelector('.news-title').innerText.toLowerCase()
					let description = item
						.querySelector('.news-description')
						.innerText.toLowerCase()
					//tecnologias
					if (title.indexOf(inputValue) != -1) {
						item.style.display = 'flex'
					} else if (description.indexOf(inputValue) != -1) {
						item.style.display = 'flex'
					} else {
						item.style.display = 'none'
					}
				})
			})
		})
	})
