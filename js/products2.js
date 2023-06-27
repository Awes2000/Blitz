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

      const priceFilter = document.getElementById("priceFilter");
      priceFilter.addEventListener("change", function () {
        const selectedPrice = parseInt(priceFilter.value);

        while (productList1Container.firstChild) {
          productList1Container.firstChild.remove();
        }

        productList1.products.forEach((product) => {
          if (selectedPrice === 0 || product.price <= selectedPrice) {
            const productLi = document.createElement("li");
            productLi.setAttribute(
              "data-category",
              product.brand.toLowerCase()
            );
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
          }
        });
      });
    });
});
