let navber =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classlist.toggle('active');
}
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = 9 =>{
    navbar.classlist.toggle('active');
    avber.classlist.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')


let cartItem =document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    navbar.classlist.toggle('active');
    avber.classlist.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}
window.onscroll = () =>{
    avber.classlist.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}
}