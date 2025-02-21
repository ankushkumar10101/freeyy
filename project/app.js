// DOM Elements
const productsContainer = document.getElementById('products-container');

// Shopping Bag Icon SVG
const shoppingBagSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
</svg>
`;

// Render Product Cards
function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay"></div>
            </div>
            <h3 class="product-title" onclick="goToProductDetail(${product.id})">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="btn btn-primary" onclick="goToProductDetail(${product.id})">
                ${shoppingBagSvg}
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Navigate to Product Detail
function goToProductDetail(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Initialize the application
renderProducts();