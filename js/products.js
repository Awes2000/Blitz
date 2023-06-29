let allGames = document.getElementsByClassName("productSchema__product");

let filters = document.getElementsByClassName("filter");

setTimeout(function () {
  window.scrollTo(0, 0);
}, 100);

//soulslike filter

for (let i = 0; i < filters.length; i++) {
  filters[i].checked = true;
}

let soulslikeFilter = document.getElementById("checkbox-sport");
soulslikeFilter.onchange = function () {
  if (soulslikeFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "sport") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "sport") {
        allGames[i].style.display = "none";
      }
    }
  }
};

let rpgFilter = document.getElementById("checkbox-cruise");
rpgFilter.onchange = function () {
  if (rpgFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "cruise") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "cruise") {
        allGames[i].style.display = "none";
      }
    }
  }
};

let actionFilter = document.getElementById("checkbox-turbo");
actionFilter.onchange = function () {
  if (actionFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "turbo") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "turbo") {
        allGames[i].style.display = "none";
      }
    }
  }
};

let hondaFilter = document.getElementById("checkbox-blaze");
hondaFilter.onchange = function () {
  if (hondaFilter.checked === true) {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "blaze") {
        allGames[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].dataset.category === "blaze") {
        allGames[i].style.display = "none";
      }
    }
  }
};

setInterval(function () {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

//producten
document.addEventListener("DOMContentLoaded", function () {
  fetch("js/data.json")
    .then((response) => response.json())
    .then((data) => {
      const productList1 = data.productLists[0];
      const productList2 = data.productLists[1];
      const productList3 = data.productLists[2];

      const productList1Container = document.getElementById("productList1");
      productList1.products.forEach((product) => {
        const productLi = document.createElement("li");
        productLi.setAttribute("data-category", product.brand.toLowerCase());
        productLi.className = "productSchema__product";

        const productLink = document.createElement("a");
        const productFigure = document.createElement("figure");
        productFigure.className = "productSchema__product_img";

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;

        productFigure.appendChild(productImg);
        productLi.appendChild(productFigure);

        const productDiv = document.createElement("div");

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("h4");
        productPrice.textContent = `€${product.price}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productLink.appendChild(productDiv);

        const addToCartButton = document.createElement("button");
        addToCartButton.className = "add_to_cart data";

        const cartIcon = document.createElement("span");
        cartIcon.className = "material-symbols-outlined";
        cartIcon.textContent = "shopping_cart";

        addToCartButton.appendChild(cartIcon);
        productLink.appendChild(addToCartButton);

        productLi.appendChild(productLink);
        productList1Container.appendChild(productLi);
      });

      const productList3Container = document.getElementById("productList3");
      productList3.products.forEach((product) => {
        const productLi = document.createElement("li");
        productLi.setAttribute("data-category", product.brand.toLowerCase());
        productLi.className = "productSchema__product";

        const productLink = document.createElement("a");
        const productFigure = document.createElement("figure");
        productFigure.className = "productSchema__product_img";

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;

        productFigure.appendChild(productImg);
        productLi.appendChild(productFigure);

        const productDiv = document.createElement("div");

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("h4");
        productPrice.textContent = `€${product.price}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productLink.appendChild(productDiv);

        const addToCartButton = document.createElement("button");
        addToCartButton.className = "add_to_cart data";

        const cartIcon = document.createElement("span");
        cartIcon.className = "material-symbols-outlined";
        cartIcon.textContent = "shopping_cart";

        addToCartButton.appendChild(cartIcon);
        productLink.appendChild(addToCartButton);

        productLi.appendChild(productLink);
        productList3Container.appendChild(productLi);
      });
    });
});

//schoppigcart

document.addEventListener("DOMContentLoaded", function () {
  let productList1;
  const shoppingCartUL = document.querySelector(".shoppingShekout ul");
  let totalAmount = 0;
  let addedProducts = [];
  let maxPrice = Infinity; // Default maximum price

  // Retrieve saved cart data from local storage if available
  const savedCartData = localStorage.getItem("shoppingCart");
  if (savedCartData) {
    addedProducts = JSON.parse(savedCartData);
    updateShoppingCart();
  }

  fetch("js/data.json")
    .then((response) => response.json())
    .then((data) => {
      productList1 = data.productLists[0];

      const addToCartButtons = document.getElementsByClassName("data");

      for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = function () {
          const clickedProduct = productList1.products[i];
          const productName = clickedProduct.name;
          const productPrice = clickedProduct.price;
          const productImgSrc = clickedProduct.image;

          // Check if the product is already added
          const isProductAdded = addedProducts.some(
            (product) => product.name === productName
          );
          if (isProductAdded) {
            alert("Product already added to the cart");
            return;
          }

          const newProduct = {
            name: productName,
            price: productPrice,
            image: productImgSrc,
          };
          addedProducts.push(newProduct);
          updateShoppingCart();

          // Save updated cart data to local storage
          localStorage.setItem("shoppingCart", JSON.stringify(addedProducts));
        };
      }
    });

  function updateShoppingCart() {
    shoppingCartUL.innerHTML = "";
    totalAmount = 0;

    addedProducts.forEach((product, index) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const h5 = document.createElement("h5");
      const h4 = document.createElement("h4");
      const removeButton = document.createElement("button");
      const removeSpan = document.createElement("span");
      removeSpan.className = "material-symbols-outlined";
      removeSpan.textContent = "delete";

      img.src = product.image;
      img.alt = product.name;
      h5.textContent = product.name;
      h4.textContent = `€${product.price.toFixed(2)}`;
      removeButton.appendChild(removeSpan);
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", () => removeProduct(index));

      li.appendChild(img);
      li.appendChild(h5);
      li.appendChild(h4);
      li.appendChild(removeButton);

      shoppingCartUL.appendChild(li);

      totalAmount += product.price;
    });

    document.querySelector(
      ".totaalbedrag"
    ).textContent = `€${totalAmount.toFixed(2)}`;
  }

  function removeProduct(index) {
    const removedProduct = addedProducts.splice(index, 1)[0];
    totalAmount -= removedProduct.price;
    updateShoppingCart();
    updateLocalStorage();
  }

  function updateLocalStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(addedProducts));
  }

  function initializeShoppingCart() {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      addedProducts = JSON.parse(savedCart);
      updateShoppingCart();
    }
  }

  initializeShoppingCart();
});

document.addEventListener("DOMContentLoaded", function () {
  // Rest of your code...

  const cartIcon = document.getElementById("cartIcon");
  const shoppingCartSection = document.querySelector(".shoppingShekout");
  const cartIconSpan = cartIcon.querySelector("span");

  cartIcon.addEventListener("click", function () {
    shoppingCartSection.classList.toggle("show");
    cartIcon.style.backgroundColor = shoppingCartSection.classList.contains(
      "show"
    )
      ? "white"
      : ""; // Toggle background color
    cartIconSpan.style.color = shoppingCartSection.classList.contains("show")
      ? "#0090e3"
      : ""; // Toggle font color
  });
});
