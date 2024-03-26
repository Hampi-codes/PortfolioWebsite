var Typed = new Typed(".changingText", {
   strings: [' Frontend Developer ', 'Web Developer', 'YouTuber'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('.mainMenu li a')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItems.forEach(item => {
   item.addEventListener('click', function () {
      close();
   })
})

function show() {
   if (window.innerWidth < 768) {
      mainMenu.style.display = "flex";
      mainMenu.style.top = "0";
   }


}
function close() {
   if (window.innerWidth < 768) {
      mainMenu.style.display = "none"
   }
}

function submitForm() {
   var form = document.forms["contact-form"];
   if (form["Name:"].value.trim() === "" || form["Email:"].value.trim() === "" || form["Subject:"].value.trim() === "" || form["message"].value.trim() === "") {
     alert("Please fill in all required fields");
     return false; 
   }
   form.submit();
   form.reset();
   return true;
 }

 document.addEventListener('DOMContentLoaded', function () {
   // Initialize Swiper
   const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
         el: '.swiper-pagination',
       },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         600: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },
   });

   // Add event listeners for the next and previous buttons
   document.querySelector('.swiper-button-next').addEventListener('click', function () {
      swiper.slideNext();
   });

   document.querySelector('.swiper-button-prev').addEventListener('click', function () {
      swiper.slidePrev();
   });
});

