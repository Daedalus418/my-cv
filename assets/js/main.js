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

/*==================== SECTIONS ACTIVE LINK WHEN SCROLLING ====================*/
function scrollActive() {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionParentTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id')

        if (scrollY > sectionParentTop && scrollY <= sectionParentTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

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

/*==================== DARK LIGHT THEME ====================*/ 
const buttonTheme = document.getElementById('js-theme-button'),
    body = document.body

// Functions to obtain the current theme and the current icon
function getCurrentTheme() {
    return body.classList.contains('dark-theme') ? 'dark' : 'light'
}
function getCurrentIcon() {
    return buttonTheme.classList.contains('uil-moon') ? 'uil-moon' : 'uil-sun'
}

buttonTheme.addEventListener('click', () => {
    // Add or remove the dark icon and the dark theme
    body.classList.toggle('dark-theme')
    buttonTheme.classList.toggle('uil-sun')
    buttonTheme.classList.toggle('uil-moon')

    // Save the current theme and the current icon in a Storage's key
    localStorage.setItem('theme-selected', getCurrentTheme())
    localStorage.setItem('icon-selected', getCurrentIcon())
})

// Get the current theme and the current icon from the Storage's keys
const chosenTheme = localStorage.getItem('theme-selected'),
    chosenIcon = localStorage.getItem('icon-selected')

// Apply the last selected theme when the website is opened again
if(chosenTheme) {
    body.classList[chosenTheme === 'dark' ? 'add' : 'remove']('dark-theme')
    buttonTheme.classList[chosenIcon === 'uil-sun' ? 'add' : 'remove']('uil-sun')
}
