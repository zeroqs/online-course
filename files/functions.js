export function menuBurger () { 
    const burgerMenu = document.querySelector('.menu__icon'); 
    if (burgerMenu) { 
        const navMenu = document.querySelector('.header__menu-main');  
        burgerMenu.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
        })   
    }
}
export function logInPopUp () { 
    const openPop = document.querySelector('.log-in');
    const closePop = document.querySelector('.close-in');
    const popUp = document.querySelector('.sign-in')
    const transit = popUp.querySelector('.reg')

    openPop.addEventListener('click', function(e) {
        e.preventDefault(); 
        popUp.classList.add('active');

        

       
        
    })
    closePop.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
    function closeOnEsc(e) { 
        if (e.keyCode == 27) {
            popUp.classList.remove('active');
        }
    }
    window.addEventListener("keyup", closeOnEsc);
    transit.addEventListener("click", function() {
        popUp.classList.remove('active');
        const transitToUp =  document.querySelector('.sign-up');
        transitToUp.classList.add('active');
        window.addEventListener("keyup", closeOnEsc);
    })


}
export function logUpPopUp () { 
    const openPop = document.querySelector('.Register');
    const closePop = document.querySelector('.close-up');
    const popUp = document.querySelector('.sign-up')
    const transit = popUp.querySelector('.reg')

    openPop.addEventListener('click', function(e) {
        e.preventDefault(); 

        popUp.classList.add('active');
    })

    closePop.addEventListener('click', () => {
        popUp.classList.remove('active');
    })

    function closeOnEsc(e) { 
        if (e.keyCode == 27) {
            popUp.classList.remove('active');
        }
    }
    window.addEventListener("keyup", closeOnEsc);

    transit.addEventListener("click", function() {
        popUp.classList.remove('active');
        const transitToSign =  document.querySelector('.sign-in');
        transitToSign.classList.add('active');

    })
}
export function list () {
    const headers = document.querySelectorAll('.header-h')

    headers.forEach(header => header.addEventListener('click', function() {
        header.nextElementSibling.classList.toggle('active')
        header.classList.toggle('active')
    } ))
}
export function sliderMeet() {
    const meetContainet = document.querySelector('.meet')
    if (meetContainet) {
        let cartToShow
    if (window.screen.width >= 1224) {
        cartToShow = 4
    } else if (window.screen.width < 1224 && window.screen.width > 960 ) {
        cartToShow = 3
    } else if ( window.screen.width <= 960 && window.screen.width > 550) {
        cartToShow = 2
    } else {
        cartToShow = 1
    }

    const meetSlider = document.querySelector('.meet__carousel')
    const cartItems = document.querySelectorAll('.meet__cart')
    const nextBtn = document.querySelector('.row-right')
    const prevBtn = document.querySelector('.row-left')
    const itemsCount = cartItems.length

    const cartToScroll = 1
    const itemWidth = meetContainet.clientWidth / cartToShow 
    const movePosition = cartToScroll * itemWidth + 9
    
    
    let position = 0


    function setPosition() {
        meetSlider.style.transform = `translateX(${position}px)`
    }
    function check() { 
        if (position === 0) {
            prevBtn.disabled = true
        } else{
            prevBtn.disabled = false
            nextBtn.disabled = false
        }
        if (position <= -((itemsCount - cartToShow) * itemWidth)) {
            nextBtn.disabled = true

        }   
    }

    cartItems.forEach((cart) => {cart.style.minWidth = `${itemWidth}px` })

    nextBtn.addEventListener('click', ()=> {
        position -= movePosition
        setPosition()
        check()
    })
    prevBtn.addEventListener('click', ()=> {
        position += movePosition
        setPosition()
        check()
    })
    check()
    }
}
export function sliderView(){
    const carousel = document.querySelector(".reviews__carousel-main");
    if (carousel) {
        function setWidthCarousel() {
            const item = document.querySelectorAll(".reviews__item");
            let widthCarousel = document.querySelector(".reviews__carousel").clientWidth;
            if (window.screen.width >= 1240) {
                carousel.style.width = `${1142}px`;
                item.forEach(item => {
                    item.style.minWidth = `${1142}px`;
                });
            } else if (window.screen.width < 1240 && window.screen.width >= 940) {
                carousel.style.width = `${842}px`;
                item.forEach(item => {
                    item.style.minWidth = `${842}px`;
                });
            } else if (window.screen.width < 940 && window.screen.width >= 630) {
                carousel.style.width = `${542}px`;
                item.forEach(item => {
                    item.style.minWidth = `${542}px`;
                });
            } else {
                carousel.style.width = `${412}px`;
                item.forEach(item => {
                    item.style.minWidth = `${412}px`;
                });
            }
        }
        
        function start() {
            const nextBtnCarousel = document.querySelector(".row-right-carousel");
        const prevBtnCarousel = document.querySelector(".row-left-carousel");
        const reviewCarousel = document.querySelector('.reviews__carousel-main')
        const widthReviewCarousel = reviewCarousel.clientWidth
        const carouselCount = document.querySelectorAll('.reviews__item').length
        const moveCarouselPosition = widthReviewCarousel + 9
        
        let positionCarousel = 0;
    
        function slideCarousel() { 
            reviewCarousel.style.transform = `translateX(${positionCarousel}px)`
         }
         function checkCarousel() { 
            if (positionCarousel === 0) {
                prevBtnCarousel.disabled = true
            } else{
                prevBtnCarousel.disabled = false
                nextBtnCarousel.disabled = false
            }
            if (positionCarousel <= -((carouselCount - 1) * widthReviewCarousel)) {
                nextBtnCarousel.disabled = true
            }   
        }
    
        nextBtnCarousel.addEventListener("click", () => {
            positionCarousel -= moveCarouselPosition
            slideCarousel()
            checkCarousel()
        });
        prevBtnCarousel.addEventListener("click", () => {
            positionCarousel += moveCarouselPosition
            slideCarousel()
            checkCarousel()
        });
        checkCarousel()
        }
        setWidthCarousel();
    
        setTimeout(start, 1000);
    }

}
export function timer() {
    const deadline = new Date(2023, 11, 1);
    let timerId = null;
    const $days = document.querySelector('.day h1');
    if ($days) {
        const $hours = document.querySelector('.hours h1 ');
        const $minutes = document.querySelector('.mins h1');
        const $seconds = document.querySelector('.sec h1');
        function countdownTimer() {
            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
            }
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

        }
        countdownTimer();
        timerId = setInterval(countdownTimer, 1000);
    }
}
export function loader() {
    window.onload = function () { 
        let preloader = document.querySelector('.loader')
        preloader.style.display = 'none'
     }
 }
 export function accordion() {
     const accLi = document.querySelectorAll('.accordion li')
     if (accLi) {
         accLi.forEach((item) => {
             item.addEventListener('click', () => {
                 item.classList.toggle('active')
             })
         })
     }
 }