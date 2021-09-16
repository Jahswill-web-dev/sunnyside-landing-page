
const hamburgerBtn = document.querySelector('div.hamburger');
const mobileNav = document.querySelector('div.mobile-menu')  

hamburgerBtn.addEventListener('click', function(){
    mobileNav.classList.toggle('show')
    mobileNav.classList.toggle('mobile-menu')
    
})