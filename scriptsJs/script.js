document.addEventListener("DOMContentLoaded", () => {
    const lefSide = document.querySelector('.hero > div')
    gsap.from(lefSide.children, {
        x: -500,
        stagger: {
            amount: 1
        },
        color: "#0ae448",
        ease: "back", scale: 0, opacity: 0
    })
    const heroDiv = document.querySelector('.hero > div:last-of-type');
    gsap.from(heroDiv.children, {
        duration: 1,
        x: 500,
        ease: 'back'

    })
    gsap.fromTo('.features div',{
        opacity: 0,
        x:-200,
         ease: "back"
    },{
        opacity: 1,
        stagger:{
            amount:1,from:"center"
        },
        x:0,
        scale: 1, ease: "ease",
        scrollTrigger:{
            trigger:".features div",
            start:"top 80%",
            markers:true,
            toggleActions:"restart reverse"
        }
    })
    var animated = false;
    const menu = document.querySelector('.menu');
    menu.addEventListener('click',
        () => {
            if (!animated) {
                document.querySelector('nav').style.top = "20%"
                menu.firstElementChild.style.transform = 'rotate(45deg) translateX(10px)'
                menu.lastElementChild.style.transform = 'rotate(-45deg) translateX(10px)';
                gsap.to('.menu', {
                    rotation: 360
                })
                
                animated = true;
            } else {
                document.querySelector('nav').style.top = "-50%";
                menu.firstElementChild.style.transform = 'rotate(0deg) translateX(0px)';
                menu.lastElementChild.style.transform = 'rotate(0deg) translateX(0px)';
              
                gsap.to('.menu', {
                    rotation: 360
                })
                animated = false;
            }
        }
    )
    
})

