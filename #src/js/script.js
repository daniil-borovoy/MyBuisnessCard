
// Navbar fixed
window.onscroll = function() {fixedNavbar()};
let navbar = document.getElementById("nav");
let offset = navbar.offsetTop;
let indent = document.getElementById("section_2");
function fixedNavbar() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("fixed");
    indent.style.marginTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("fixed");
    indent.style.marginTop = 0;
  }
}

(function(){

  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function(){  
    if( limit == counter.length ){ return; }
    
    for(let i = 0; i < counter.length; i++){
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if( pos < win && counter[i].dataset.stop === "0" ){
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function(){
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil( counter[i].dataset.to / 50 ); 
          counter[i].innerText = x + "%";
          if( x > counter[i].dataset.to ){
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to + "%";
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
  
  })();

// POPUPS **************************************************
const popupLinks = document.querySelectorAll(".popup_link");
const popups = document.querySelectorAll(".popup");
const cancels = document.querySelectorAll(".cancel");
if (popupLinks){
  for (let i = 0; i < popupLinks.length; i++) {
    popupLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      const currentPopup = popups[i];
      disableScroll();
      currentPopup.classList.toggle("popup__open");
    });
  } 
}
for (let i = 0; i < popupLinks.length; i++){
  popups[i].addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
          enableScroll();
          popups[i].classList.toggle("popup__open");
        }
      });
  cancels[i].addEventListener("click", function (e) {
      enableScroll();
      popups[i].classList.remove("popup__open");
  });
  }
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
function enableScroll() {
  window.onscroll = function() {};
}
// POPUPS END **************************************************
const menu_Links = document.querySelectorAll(".menu_link[data-goto]");
if (menu_Links.length > 0){
  menu_Links.forEach(menu_link => {
    menu_link.addEventListener("click", onMenuLinkClick)
  });

  function onMenuLinkClick(e){
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.getElementById("nav").offsetHeight;``
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    } 
  }
}
// GALLERY *********************************
const buttonNext = document.querySelectorAll(".next");
const buttonBack = document.querySelectorAll(".back");
const gallery = document.querySelectorAll(".gallery");
buttonNext.addEventListener("click", function (e) {
  
})
// GALLERY END *********************************


