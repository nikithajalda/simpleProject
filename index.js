let Searchform = document.querySelector('.search-form');

document.querySelector('#search').onclick= function (){
    Searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick= function (){
    Searchform.classList.remove('active');
    shoppingCart.classList.toggle('active');
    logIn.classList.remove('active');
    navBar.classList.remove('active');
}


let logIn = document.querySelector('.model-container');

document.querySelector('#login').onclick= function (){
    logIn.classList.add('active');
    shoppingCart.classList.remove('active');
    Searchform.classList.remove('active');
    navBar.classList.remove('active');
}

document.querySelector('.fa-times').onclick= function(){
    logIn.classList.remove('active');

}

let navBar = document.querySelector('#navbar');
document.querySelector('#menu').onclick= function(){
    navBar.classList.toggle('active');
    Searchform.classList.remove('active');
    logIn.classList.remove('active');
}

window.onscroll= function(){
    shoppingCart.classList.remove('.active');
    Searchform.classList.remove('active');
    logIn.classList.remove('active');
    navBar.classList.remove('active');
}

function first(){
    document.getElementById('slideImage').src="img/banner1.jpg";
}
function second(){
    document.getElementById('slideImage').src="img/off.jpg";
}
function third(){
    document.getElementById('slideImage').src="img/off.jpg";
}
function four(){
    document.getElementById('slideImage').src="img/sea foodd.jpg";
}

setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);
setInterval(four,8000);


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".frames", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
   