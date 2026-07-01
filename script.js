// ===== MR MART =====

let cart = [];
let total = 0;

// Add To Cart
function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    showCart();
}

// Show Cart
function showCart(){

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(function(item){

        cartItems.innerHTML += `
        <p>🛒 ${item.name} - ₹${item.price}</p>
        `;

    });

    document.getElementById("total").innerText = total;
}// ===============================
// SEARCH PRODUCTS
// ===============================

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(product){

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

}

// ===============================
// LOGIN BUTTON
// ===============================

const loginBtn = document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click",function(){

alert("👤 Login System Coming Soon!");

});

}

// ===============================
// CHECKOUT BUTTON
// ===============================

const checkoutBtn = document.getElementById("checkout-btn");

if(checkoutBtn){

checkoutBtn.addEventListener("click",function(){

if(cart.length==0){

alert("🛒 Your cart is empty!");

}else{

alert("✅ Order Placed Successfully!");

}

});

}


