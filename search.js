const allProducts = [
    { name: "MacBook Neo", desc: "The magic of Mac at a surprising price.", price: "$849", img: "laptop.png" },
    { name: "MacBook Air", desc: "Light, fast and simple for everyday work.", price: "$999", img: "laptop.png" },
    { name: "MacBook Pro", desc: "More power for study and creative tasks.", price: "$1299", img: "laptop.png" },
    { name: "iPad Air", desc: "Portable and convenient for daily use.", price: "$699", img: "laptop.png" },
    { name: "iPhone Neo", desc: "Smart, elegant and easy to use.", price: "$799", img: "laptop.png" },
    { name: "AirPods Max", desc: "Clear sound and comfortable listening.", price: "$499", img: "laptop.png" }
];

function performSearch() {
    const input = document.getElementById('userSearchInput');
    const resultsContainer = document.getElementById('searchResults');
    const query = input.value.trim().toLowerCase();

    if (!query) {
        alert("Please enter a keyword.");
        return;
    }

    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query)
    );

    renderResults(filtered);
}

function renderResults(products) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ""; 

    if (products.length === 0) {
        resultsContainer.innerHTML = '<div class="display-unit"><p style="text-align:center; padding:50px; color:#666;">No products found for your search.</p></div>';
        return;
    }

    products.forEach(p => {
        const cardHTML = `
            <div class="display-unit quarter">
                <div class="premium-card product-link" style="min-height: 460px; margin-bottom:20px;">
                    <div><h3 style="margin:0 0 10px; font-size: 24px;">${p.name}</h3></div>
                    <div><p style="margin:0 0 12px; color:#555; line-height:1.5;">${p.desc}</p></div>
                    <div><p style="margin:0 0 16px; font-weight:700; color: var(--brand-main);">Price: ${p.price}</p></div>
                    <div class="card-media">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHTML;
    });
}

document.getElementById('userSearchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});