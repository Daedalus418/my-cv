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
const tabs = document.querySelectorAll('.qualification__button')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('js-qualification__active')
        })
        tab.classList.add('js-qualification__active')
    })
})
