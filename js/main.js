/* Reviews */

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; i < arrowButtons.length; i++) {
  arrowButtons[i].onclick = function () {
    if (modus === "one-two-three") {
      reviews[0].style.display = "none";
      reviews[1].style.display = "none";
      reviews[2].style.display = "none";
      reviews[3].style.display = "block";
      reviews[4].style.display = "block";
      reviews[5].style.display = "block";
      modus = "four-five-six";
    } else {
      reviews[0].style.display = "block";
      reviews[1].style.display = "block";
      reviews[2].style.display = "block";
      reviews[3].style.display = "none";
      reviews[4].style.display = "none";
      reviews[5].style.display = "none";
      modus = "one-two-three";
    }
  };
}
/*Reviews einde */

window.addEventListener("load", function () {
  const heroImage = document.querySelector(".hero-image");
  heroImage.classList.add("loaded");
});

// Get the hero image element
const heroImage = document.getElementById("hero-image");

// Create a ripple animation using anime.js
anime({
  targets: heroImage,
  translateX: ["-100%", "0%"],
  opacity: [0, 1],
  easing: "linear",
  duration: 2000, // Adjust the duration as desired
});

/*SHOWROOM BLITZ */
// Automatically start the carousel
window.addEventListener("load", function () {
  startCarousel();
});

function startCarousel() {
  setInterval(nextSlide, 5000); // Transition every 5 seconds
}

function nextSlide() {
  const carouselImages = document.querySelector(".carousel");
  const imageWidth = carouselImages.firstElementChild.clientWidth;

  carouselImages.style.transition = "transform 1s ease-in-out";
  carouselImages.style.transform = `translateX(-${imageWidth}px)`;

  setTimeout(function () {
    carouselImages.appendChild(carouselImages.firstElementChild);
    carouselImages.style.transition = "none";
    carouselImages.style.transform = "translateX(0)";
  }, 1000);
}

/* SHOWROOM BLITZ END */
