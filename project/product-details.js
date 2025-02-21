// DOM Elements
const productDetailSection = document.getElementById('product-detail');

// Shopping Bag Icon SVG
const shoppingBagSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
</svg>
`;

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Show Product Detail
function renderProductDetail() {    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    productDetailSection.innerHTML = `
        <div class="product-detail-container">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-content">
                <h1 class="product-detail-title">${product.name}</h1>
                <p class="product-detail-price">$${product.price}</p>
                
                <div class="tabs">
                    <button class="tab active" onclick="switchTab('description', this)">Description</button>
                    <button class="tab" onclick="switchTab('specifications', this)">Specifications</button>
                </div>

                <div id="description" class="tab-content active">
                    <p>${product.description}</p>
                    <h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Features</h3>
                    <ul class="features-list">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div id="specifications" class="tab-content">
                    <div class="specifications-list">
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <div class="specification-item">
                                <span class="specification-label">${key}</span>
                                <span>${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                    <button class="btn btn-primary" style="flex: 1;" onclick="goToThankYou(${product.id})">
                        ${shoppingBagSvg}
                        Buy Now
                    </button>
                    <button class="btn btn-primary" style="flex: 1;" onclick="goToHome()">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Switch Tabs in Product Detail
function switchTab(tabId, tabButton) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    tabButton.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Navigation Functions
function goToThankYou(productId) {
    window.location.href = `thank-you.html?id=${productId}`;
}

function goToHome() {
    window.location.href = 'index.html';
}

// Initialize the page
renderProductDetail();