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