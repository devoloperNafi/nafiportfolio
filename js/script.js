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



// Accordion Skill


const skill_content = document.getElementsByClassName('skillContent'),
    skill_header = document.querySelectorAll('.skillHeader');

function toggleSkill(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skill_content.length; i++){
        skill_content[i].className = 'skillContent skillClose'
    }
    if(itemClass === 'skillContent skillClose'){
        this.parentNode.className = 'skillContent skillOpen'
    }
}
skill_header.forEach((el) =>{
    el.addEventListener('click', toggleSkill)
})


// Qualification Tabs

const tabs = document.querySelectorAll('[data-Target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualificationActive')
        })
        target.classList.add('qualificationActive')
        tabs.forEach(tab =>{
            tab.classList.remove('qualificationActive')
        })
        tab.classList.add('qualificationActive')
    })
})     



// service modal


const modalViews = document.querySelectorAll('.serviceModal'),
      modalBtns = document.querySelectorAll('.serviceButton'),
      modalCloses = document.querySelectorAll('.serviceModalClose');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('activeModal')
}  

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
})
modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalview) =>{
            modalview.classList.remove('activeModal')
        })
    })
})