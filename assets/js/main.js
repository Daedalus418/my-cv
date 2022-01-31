/*==================== SHOW/HIDE MENU ====================*/
const navToggle = document.getElementById('js-nav-toggle'),
    navClose = document.getElementById('js-nav-close'),
    navMenu = document.getElementById('js-nav-menu')

/*===== MENU SHOW =====*/
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

/*===== MENU HIDDEN =====*/
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/*==================== QUALIFICATION TABS ====================*/
const qualificationButtons = document.querySelectorAll('.qualification__button'),
    qualificationContents = document.querySelectorAll('.qualification__content')

qualificationButtons.forEach(qualificationButton => {

    qualificationButton.addEventListener('click', () => {
        activeContent = document.querySelector(qualificationButton.getAttribute('aria-controls'))

        qualificationButtons.forEach(qualificationButton => {
            qualificationButton.classList.remove('js-qualification__active')
        })
        qualificationButton.classList.add('js-qualification__active')

        qualificationContents.forEach(qualificationContent => {
            qualificationContent.classList.remove('js-qualification__active')
            qualificationContent.setAttribute('aria-hidden', 'true')
        })
        activeContent.classList.add('js-qualification__active')
        activeContent.removeAttribute('aria-hidden')
    })
})

/*==================== PORTFOLIO: SHOW/HIDE TEXT ====================*/
const portfolioInformation = document.querySelector('.portfolio__information'),
    portfolioContents = Array.from(portfolioInformation.querySelectorAll('.portfolio__content'))

portfolioContents.forEach(portfolioContent => {
    portfolioContent.addEventListener('click', () => {

        portfolioContents.forEach(elem => elem.classList.remove('portfolio__active'))
        portfolioContent.classList.add('portfolio__active')
    })
})

/*==================== ADD BOXSHADOW TO THE HEADER WHEN SCROLLING ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll > 80 viewport's height, scroll-header class is added to the header tag.
    if(this.pageYOffset >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link')

function linkClick() {
    const navMenu = document.getElementById('js-nav-menu')
    navMenu.classList.remove('show-menu')
}

// When a nav__link is clicked, the show-menu class is removed from the nav__menu 
navLinks.forEach(navLink => navLink.addEventListener('click', linkClick))

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('js-scroll-up')
    if(this.pageYOffset >= 560) {
        scrollUp.classList.add('show-scrollup')
    } else {
        scrollUp.classList.remove('show-scrollup')
    }
}

window.addEventListener('scroll', scrollUp)
