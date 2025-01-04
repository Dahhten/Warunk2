import { products } from "./product_list/products.js";

function renderProducts(productList) {
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-label">${product.label}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">${product.rating}</div>
                <div class="product-shop">
                    <img src="${product.shopIcon}" alt="${product.shopName}">
                    <div class="product-shop-name">${product.shopName}</div>
                </div>
                <div class="product-additional-label">${product.additionalLabel}</div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
}

// Render products from the data file
renderProducts(products);
