// menu hidden and show

const nav_menu = document.getElementById('navMenu'),
    nav_toggle = document.getElementById('navToggle'),
    nav_close = document.getElementById('navClose');

// menu show
// validate if constant exist
if(nav_toggle){
    nav_toggle.addEventListener('click', () =>{
        nav_menu.classList.add('showMenu')
    })
}

// menu hidden
// validate if constant exist
if(nav_close){
    nav_close.addEventListener('click', () =>{
        nav_menu.classList.remove('showMenu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))