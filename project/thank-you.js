// DOM Elements
const thankYouSection = document.getElementById('thank-you');

// Shopping Bag and Check Icons SVG
const shoppingBagSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
</svg>
`;

const checkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
</svg>
`;

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Render Thank You Page
function renderThankYou() {
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    thankYouSection.innerHTML = `
        <div class="thank-you-card">
            <div class="success-icon">
                ${checkSvg}
            </div>
            <h1 class="thank-you-title">Thank You for Your Purchase!</h1>
            <p class="thank-you-subtitle">Your order has been successfully placed and will be processed shortly.</p>
            
            <div class="order-summary">
                <div class="order-product">
                    <img src="${product.image}" alt="${product.name}" class="order-product-image">
                    <div class="order-product-details">
                        <h2 class="order-product-title">${product.name}</h2>
                        <p style="color: #666; margin-bottom: 0.5rem;">${product.description}</p>
                        <p class="product-price">$${product.price}</p>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary" onclick="goToHome()">
                ${shoppingBagSvg}
                Continue Shopping
            </button>
        </div>
    `;
}

// Navigation Function
function goToHome() {
    window.location.href = 'index.html';
}

// Initialize the page
renderThankYou();