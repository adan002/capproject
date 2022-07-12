// required
    const navSlide = () =>{
    const list = document.querySelector('.list');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//  popup function

const baseURL = 'http://localhost:4004/api/views'
// document.querySelector("#alreadyregister").addEventListener("click",loginHandler);
document.querySelector("#loginbtn").addEventListener("click",loginHandler);

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
// popup function end      
    list.addEventListener('click',()=>{
        //toggle nav
    nav.classList.toggle('nav-active');
        
        //animation links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }    
        }) ;
            // list animation
            list.classList.toggle('toggle') 
    }); 
} 
navSlide();

function loginHandler(){
    document.querySelector(".popup").classList.add("active");
}