// SEARCH
const search_button = document.getElementById('search_button'),
closeicon = document.getElementById('close-icon'),
searchicon= document.getElementById('search-icon')

if(search_button){
    search_button.addEventListener('click',()=>{
        searchicon.classList.add('show-search')
    })
}

// menu Hidden
if(closeicon){
    closeicon.addEventListener('click',()=>{
        searchicon.classList.remove('show-search')
    })
}

// login
const login_button = document.getElementById('login_button'),
login_close = document.getElementById('login-close'),
login_card= document.getElementById('login-content')

if(login_button){
    login_button.addEventListener('click',()=>{
        login_card.classList.add('login-search')
    })
}

// menu Hidden
if(login_close){
    login_close.addEventListener('click',()=>{
        login_card.classList.remove('login-search')
    })
}

//    home swiper

let homeswiper = new Swiper('.home-swiper',{
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay:3000,
        disablebleOnInteraction:false,
    },
    breakpoints:{
        1220:{
            spaceBetween:-32,
        }
    }
})

// show header
const shadowHeader =()=>{
    const header =document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//   featured swiper

let featuredswiper = new Swiper('.featured-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlides:false,
        }
    }
})

//  new swiper

let newswiper = new Swiper('.new-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
})

// siwper testimonail
let testimonoilswiper = new Swiper('.testimonial-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
})

// show scrool up
const scrollUp = () =>{
    const scrollUp = document.getElementById("scrool-up")

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// ==        ==   SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight =  current.offsetHeight,
        sectionTop= current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// ---------- Dark Light Theme 

const themeButton = document.getElementById('change_theme')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROOL REVEAL ANIMATION
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,

})
sr.reveal(`.home-data , .featured-container , .new-container ,
            .join-data`) 
sr.reveal(`.home-images`,{delay:600})
sr.reveal(`.service-card`,{interval:100})
sr.reveal(`.discount-data`,{origin:'left'})
sr.reveal(`.discount-images`,{origin:'right'})