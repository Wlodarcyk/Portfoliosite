const header = document.querySelector('header')


const stikcyHeader = () => {

    const scroll = window.scrollY

    if(scroll > 0){
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', stikcyHeader)


const menu = document.querySelector('.menu')
const menuTriggerBtn = document.querySelector('.menu-sidebar-toggle')
const closeMenuBtn = document.querySelector('.close-menu-drawer')

menuTriggerBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

function openMenu () {
   menu.classList.add('active') 
   closeMenuBtn.classList.add('active')

   menuTriggerBtn.setAttribute('aria-expanded', 'true')



}

function closeMenu (){
    menu.classList.remove('active')
       closeMenuBtn.classList.remove('active')

          menuTriggerBtn.setAttribute('aria-expanded', 'false')


}

const menuLinks = document.querySelectorAll('.menu-items, .list-item-footer');

menuLinks.forEach(link => link.addEventListener('click', (event) => {
    const key = event.target.dataset.key

    const section = document.querySelector(`.${key}`).
    getBoundingClientRect().top + window.pageYOffset - 180;
    closeMenu()

    window.scrollTo({top: section, behavior: "smooth"})

}))

// ANIMATION MARQUE 

const marquee = document.querySelector('.technlogies--items');

const items = [...marquee.children]

items.forEach(item => {
    const clone = item.cloneNode(true);

    marquee.appendChild(clone)


})




// COLLAPSABLE ELEMENT 

const headerNav = document.querySelectorAll('.footer-nav-heading')
const footerAccordionContent = document.querySelectorAll('.list-item-footer')

headerNav.forEach(header => header.addEventListener('click', openAccordion))

function openAccordion () {
    footerAccordionContent.forEach(content => {
        content.classList.toggle('active')


    })
   this.classList.toggle('active')
}