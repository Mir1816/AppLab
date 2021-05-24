/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("menu__show")
        })
    }
}
showMenu("i-toggle","i-nav-menu");

/*===== MENU A =====*/ 
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('i-nav-menu')
  navMenu.classList.remove('menu__show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





/*====FAQ-CARTS=======*/
const showCarts = (toggleItemId, itemId) =>{
    const toggleItems = document.querySelectorAll(toggleItemId),
    items = document.querySelectorAll(itemId)


    toggleItems.forEach((toggleItem, idx) =>{
        if(toggleItem && items[idx]){
            toggleItem.addEventListener("click",()=>{
                console.log(1);
                items[idx].classList.toggle("show__carts")
            })
        }
    })
}
showCarts("#i-faq-toggle","#faq__cartss-item-text");







/*=====SLICK-SLIDER=====*/
$('.faq__contetn-slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive:[
        {
            breakpoint: 530,
            settings: {
                autoplay: false,
                dots: true
            }
        }
            
    ]
   
});