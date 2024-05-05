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

