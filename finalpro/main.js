function addToCart(button) {
    const box = button.closest('.product'); // Target the closest product container

    // Extract price and handle formatting
    const priceText = box.querySelector('.price + p').textContent;
    const price = parseFloat(priceText.replace(/[₹,/,-]/g, '').trim());

    // Extract size from the <select> dropdown
    const size = box.querySelector('select[name="size"]').value;

    // If size is not selected, alert the user and exit the function
    if (!size) {
        alert('Please select a size');
        return;
    }

    // Create the item object
    const item = {
        name: box.querySelector('h3').textContent,
        price: price,
        size: size,
        image: box.querySelector('img').src,
        quantity: 1 // Default quantity
    };

    // Retrieve existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart (by name and size)
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name && cartItem.size === item.size);

    if (existingItemIndex > -1) {
        // If the item exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart
        cart.push(item);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Give user feedback that the item was added successfully
    alert(`Added to cart:\n${item.name}\nPrice: ₹${item.price}\nSize: ${item.size}`);

    // Optionally, update cart count or cart preview in UI here
    updateCartCount(cart.length);
}

// Example of a function to update cart item count in UI (optional)
function updateCartCount(count) {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}
