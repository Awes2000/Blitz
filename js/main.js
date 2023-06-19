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
    } else if (index === 2) {
      tuningSelectionText.innerHTML = "Pro tuning";
    } else if (index === 3) {
      tuningSelectionText.innerHTML = "Ultimate tuning";
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

/

const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.querySelector(".shoppingCart__message");

let modalIsOpen = false;
let buzz = 0;
let ironman = 0;
let c3po = 0;

/* Modal voor add to cart, etc, 

const shoppingModal = document.getElementById("js--shoppingModal");
const cartButton = document.getElementById("js--checkoutButton");
const checkOutWindow = document.getElementById("js--checkoutWindow");
const backButton = document.getElementById("icon");
let checkoutIsOpen = false;

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    cartMessage += 1;
    cartMessageValue.innerHTML = cartMessage;
    switch (addToCartButtons[i].dataset.product) {
      case "buzz":
        buzz += 1;
        break;
      case "ironman":
        ironman += 1;
        break;
      case "c3po":
        c3po += 1;
        break;
    }

    if (modalIsOpen === false) {
      shoppingModal.style.display = "block";
      modalIsOpen = true;
      setTimeout(function () {
        shoppingModal.style.display = "none";
        modalIsOpen = false;
      }, 2000);
    }

    updatePrices();
  });
}

cartButton.addEventListener("click", function () {
  if (checkoutIsOpen === false) {
    document.querySelector("main").style.display = "none";
    checkOutWindow.style.display = "block";
    checkoutIsOpen = true;
    backButton.innerHTML = "arrow_back";
    // searchBar.style.display = "none"; // Make sure to define searchBar variable before uncommenting this line
    updatePrices();
  } else {
    document.querySelector("main").style.display = "block";
    checkOutWindow.style.display = "none";
    checkoutIsOpen = false;
    backButton.innerHTML = "shopping_cart_checkout";
    // searchBar.style.display = "flex"; // Make sure to define searchBar variable before uncommenting this line
  }
});

function updatePrices() {
  const buzzPrice = 49;
  const ironmanPrice = 39;
  const c3poPrice = 49;

  document.getElementById("js--price-buzz").innerHTML = "€" + buzz * buzzPrice;
  document.getElementById("js--price-ironman").innerHTML =
    "€" + ironman * ironmanPrice;
  document.getElementById("js--price-c3po").innerHTML = "€" + c3po * c3poPrice;
}

einde modal shoppingcart */
