const btn=document.getElementsByClassName('btn')[0];  
const navbar=document.getElementsByClassName('navbar-links')[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    // Active class is add to the navbar-links class
});