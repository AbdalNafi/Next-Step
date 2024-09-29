document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.querySelector("#cartTable tbody");
    const cartTotalElement = document.getElementById("cartTotal");

    let totalAmount = 0;

    cart.forEach(item => {
        const row = document.createElement("tr");
        const total = item.price * item.quantity;
        totalAmount += total;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td>₹${total}</td>
        `;
        cartTableBody.appendChild(row);
    });

    cartTotalElement.textContent = `Total Amount: ₹${totalAmount}`;
});
