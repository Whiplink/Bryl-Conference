const mobileMenu = document.querySelector('.mobile-menu')
const mobileNav = document.querySelector('.mobile-nav')
const closeNav = document.querySelector('.close-nav')
const dim = document.querySelector('.dim')
const body = document.querySelector('body')

const toggleMenu = () => {
		mobileNav.classList.toggle('active')
		dim.classList.toggle('active')
}


mobileMenu.addEventListener('click', toggleMenu)
closeNav.addEventListener('click', toggleMenu)
dim.addEventListener('click', toggleMenu)




addEventListener('scroll', scroll => {
		const s3 = document.querySelector('.s3')
		if (s3.getBoundingClientRect().y < (innerHeight * 0.6)) {
				document.documentElement.style.setProperty('--blue', '#033977')
		} else {
				document.documentElement.style.setProperty('--blue', '#0E086A')
		}
		
		
})
