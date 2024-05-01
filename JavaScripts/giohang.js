function renderCartItems(userIdentify) {
    const container = document.getElementById("cart-items-container");
    let html = "";

    addToCarts.forEach(item => {
        if (item.userIdentify === userIdentify) {
            const product = products.find(prod => prod.id === item.productID);
            if (product) {
                html += `
                    <tr class="line-item-container" data-variant-id="${item.productID}">
                        <td class="image">
                            <div style="padding-left: 20px;" class="product_image">
                                <a href="/products/${product.productName}">
                                    <img width="100px" height="160px" src="${product.image}" alt="${product.productName}" />
                                </a>
                            </div>
                        </td>
                        <td class="item" style="padding-left: 30px;">
                            <a href="/products/${product.productName}" class="tenSanPham">
                                <label>${product.productName}</label>
                            </a>
                            <p>
                                <span>${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>₫
                            </p>
                            <p class="variant">
                                <span class="variant_title">${product.sizes[0]}</span>
                            </p>
                            <div class="qty quantity-partent qty-click clearfix">
                                <div class="quantity-control">
                                    <button class="decrease">-</button>
                                    <input type="text" class="quantity-input" value="${item.amount}">
                                    <button class="increase">+</button>
                                </div>
                            </div>
                        </td>
                        <td style="float: right;" class="remove">
                            <a href="/cart/change?line=1&quantity=0" class="cart hovertrash" title="Xóa sản phẩm này">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                            <br><br><br>
                            <p class="price" style="float: right;">
                                <div>
                                    <span class="text">Thành tiền:</span>
                                    <span class="line-item-total">${(product.price * item.amount).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>₫
                                </div>
                            </p>
                        </td>
                    </tr>
                `;
            }
        }
    });

    let CartValue = 0;

    addToCarts.forEach(item => {
        if (item.userIdentify === userIdentify) {
            const product = products.find(prod => prod.id === item.productID);
            if (product) {
                CartValue += product.price * item.amount;
            }
        }
    });

    document.getElementById("cart-value").innerHTML = CartValue;

    container.innerHTML = html;
}
function redirectToHomePage() {
    window.location.href = "home.html";
}
loadDataFromLocalStorage();
renderCartItems(localStorage.getItem("user"));
