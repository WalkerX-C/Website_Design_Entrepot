const allProducts = [
    { id:0, name: "MacBook Neo", desc: "The magic of Mac at a surprising price.", price: "$849", img: "laptop.png" },
    { id:1, name: "MacBook Air", desc: "Light, fast and simple for everyday work.", price: "$999", img: "laptop.png" },
    { id:2, name: "MacBook Pro", desc: "More power for study and creative tasks.", price: "$1299", img: "laptop.png" },
    { id:3, name: "iPad Air", desc: "Portable and convenient for daily use.", price: "$699", img: "laptop.png" },
    { id:4, name: "iPhone Neo", desc: "Smart, elegant and easy to use.", price: "$799", img: "laptop.png" },
    { id:5, name: "AirPods Max", desc: "Clear sound and comfortable listening.", price: "$499", img: "laptop.png" }
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
        resultsContainer.innerHTML = '<div class="display-unit"><p style="text-align:center; padding:50px; color:#666;">No products found.</p></div>';
        return;
    }

    products.forEach(p => {
        const cardHTML = `
            <div class="display-unit quarter">
                <div class="premium-card product-link" 
                     style="min-height:460px; margin-bottom:20px; cursor:pointer;"
                     onclick="goToProduct(${p.id})">

                    <div><h3 style="margin:0 0 10px;">${p.name}</h3></div>
                    <div><p style="margin:0 0 12px;">${p.desc}</p></div>
                    <div><p style="font-weight:700;">Price: ${p.price}</p></div>

                    <div class="card-media">
                        <img src="${p.img}" alt="${p.name}">
                    </div>

                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHTML;
    });
}

function goToProduct(id) {
    window.location.href = "product.html?id=" + id;
}
