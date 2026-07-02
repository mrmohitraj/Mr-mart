let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price, qty = 1) {
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }

    updateCart();
}
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }

    updateCart();
}

// UPDATE CART
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    let count = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
            <div>
                🛒 ${item.name} - ₹${item.price} × ${item.qty}
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cart-count").innerText = count;

    localStorage.setItem("cart", JSON.stringify(cart));
}
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div>
                🛒 ${item.name} - ₹${item.price} × ${item.qty}
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// QUANTITY CONTROLS
document.addEventListener("click", function(e) {
    let productCard = e.target.closest(".product-card");

    if (!productCard) return;

    let name = productCard.querySelector("h3").innerText;
    let priceText = productCard.querySelector(".price").innerText;
    let price = parseInt(priceText.replace("₹", ""));

    let qtySpan = productCard.querySelector(".qty");

    let qty = parseInt(qtySpan.innerText);

    if (e.target.classList.contains("plus")) {
        qty++;
        qtySpan.innerText = qty;
    }

    if (e.target.classList.contains("minus")) {
        if (qty > 1) {
            qty--;
            qtySpan.innerText = qty;
        }
    }

    if (e.target.innerText === "Add +") {
        addToCart(name, price, qty);
    }
});

// CHECKOUT
document.getElementById("checkout-btn").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("🛒 Your cart is empty!");
    } else {
        alert("✅ Order Placed Successfully!");
        cart = [];
        updateCart();
    }
});

// SEARCH
document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();

        product.style.display = name.includes(value) ? "block" : "none";
    });
});

// LOGIN
document.querySelector(".login-btn").addEventListener("click", function() {
    alert("👤 Login Coming Soon!");
});function openCart(){
    document.getElementById("cart-panel").classList.toggle("active");
}function checkout() {
    if (cart.length === 0) {
        alert("🛒 Your cart is empty!");
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
    });

    document.getElementById("pay-amount").innerText = total;
    document.getElementById("payment-page").style.display = "block";
}

function placeOrder() {
    cart = [];
    updateCart();

    document.getElementById("payment-page").style.display = "none";
    document.getElementById("success-page").style.display = "block";
                  }
