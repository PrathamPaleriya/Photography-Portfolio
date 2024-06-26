// last upload: 12/5/24


const trailer = document.getElementById("cursor");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 200,
        fill: "forwards"
    });

    

    
}

window.onmousemove = e => {
    const interactive = e.target.closest(".interactive");
    const interacting = interactive !== null;
    animateTrailer(e, interacting);
    
    
}


const menubtn = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menubtn.addEventListener("mouseenter", ()=>{
    if(navigation.style.display === "none" || navigation.style.display === ""){
        navigation.style.display = "flex";
        navigation.style.animation = "slideIn 0.3s forwards";
    }
    else{
        hideNavigation();
    }
})

navigation.addEventListener("mouseleave", hideNavigation)

function hideNavigation() {
    navigation.style.animation = "slideOut 0.3s forwards";
    setTimeout(() => {
      navigation.style.display = "none";
    }, 300);
  }


  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.box').forEach(box => {
      gsap.to(box, {
          scrollTrigger: {
              trigger: box,
              scrub: 2,
              start: 'top center'
          },
          y: -100,
          duration: 0.5
      });
  });


const myText = new SplitType(".footer-title", {types: 'words'})
  
gsap.to(".word", {
    scrollTrigger: {
      trigger: ".word",
      end: "bottom bottom",
      toggleAction: "restart",
      scrub: 1
    },
    y: 0,
    stagger: 0.1,
    delay: 0.1,
    duration: 0.3, 
    onUpdate: function() {
        console.log(this.targets()[0].style.y); // Log the value of the y property
    }
  });
