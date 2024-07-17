$('.container-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    centerPadding: 0,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

const menuBtn = document.querySelector('.items-menu-mobile i')

menuBtn.addEventListener('click', ()=> {
    let itemsMenu = document.querySelector('.menu-mobile')
    itemsMenu.classList.toggle('show')
})