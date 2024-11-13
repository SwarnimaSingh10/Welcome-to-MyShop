// Initialize cart as an empty array
let cart = [];

// Function to add product to cart
function addToCart(name, price) {
    // Add product to cart
    cart.push({ name: name, price: price });
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Update cart count
    document.getElementById("cart-count").innerText = cart.length;

    // Update cart items list
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update total price
    document.getElementById("total-price").innerText = `Total: $${total}`;
}

// Function to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = []; // Clear cart after checkout
        updateCartDisplay();
    }
}

