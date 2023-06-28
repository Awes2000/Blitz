document.addEventListener("DOMContentLoaded", function () {
  let arrowButtons = document.getElementsByClassName("arrow");
  let reviews = document.getElementsByClassName("review");
  let modus = "one-two-three";

  for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].addEventListener("click", function () {
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
    });
  }
});

/*Reviews einde */

window.addEventListener("load", function () {
  const heroImage = document.querySelector(".hero-image");
  heroImage.classList.add("loaded");
});

// Get the hero image element
const heroImage = document.getElementById("hero-image");

window.addEventListener("DOMContentLoaded", function () {
  const tuningCircles = document.getElementsByClassName("tuning-circle");
  const tuningSelectionText = document.getElementById("tuning-selection-text");
  const tuningImage = document.getElementById("tuning-image");
  const productPrice = document.querySelector(".product-price");

  for (let i = 0; i < tuningCircles.length; i++) {
    tuningCircles[i].addEventListener("click", function () {
      updateTuningSelection(i + 1);
      toggleSelectedClass(i);
      updateTuningImage(i + 1); // Add this line to call the function
    });
  }

  function updateTuningSelection(index) {
    if (index === 1) {
      tuningSelectionText.innerHTML = "Fine tuning";
      productPrice.innerHTML = "€449.99";
    } else if (index === 2) {
      tuningSelectionText.innerHTML = "Pro tuning";
      productPrice.innerHTML = "€499.99";
    } else if (index === 3) {
      tuningSelectionText.innerHTML = "Ultimate tuning";
      productPrice.innerHTML = "€549.99";
    }
  }

  function toggleSelectedClass(index) {
    for (let i = 0; i < tuningCircles.length; i++) {
      if (i === index) {
        tuningCircles[i].classList.add("selected");
      } else {
        tuningCircles[i].classList.remove("selected");
      }
    }
  }

  function updateTuningImage(index) {
    if (index === 1) {
      tuningImage.src = "img/fune-tuning-first-product.webp";
    } else if (index === 2) {
      tuningImage.src = "img/pro-tuning-second-product.webp";
    } else if (index === 3) {
      tuningImage.src = "img/ultimate-tuning-first-product.webp";
    }
  }
});

// Display popup message and update cart count
function addToCart() {
  var cartCountElement = document.querySelector(".cart-count");
  var popupMessageElement = document.getElementById("popup-message");

  // Update cart count
  var cartCount = parseInt(cartCountElement.innerHTML);
  cartCount++;
  cartCountElement.innerHTML = cartCount;

  // Display popup message
  popupMessageElement.innerHTML = "Added to cart!";

  // Show the popup
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  // Hide the popup after 1 second
  setTimeout(function () {
    popup.style.display = "none";
  }, 1000);
}

// Initialize cart functionality
function initCart() {
  // Add event listener to "Add to Cart" button
  var addToCartButton = document.getElementById("button-showcase");
  addToCartButton.addEventListener("click", addToCart);
}

// Initialization
initCart();
