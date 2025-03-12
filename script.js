document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute("data-product");
        addToCart(productName);
    });
});



function addToCart(productName) {
    const cartList = document.getElementById('cart');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${productName}</span>
        <a href='#' class="delete" onclick="removeFromCart(this)">X</a>
    `;
    cartList.appendChild(cartItem);
}

function removeFromCart(a) {
    const cartItem = a.parentElement;
    cartItem.remove();
    
}