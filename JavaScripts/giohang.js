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
                                <span class="variant_title">Size: ${product.sizes[0]}</span>
                            </p>
                            <div class="qty quantity-partent qty-click clearfix">
                                <div class="quantity-control">
                                    <div> Số lượng: ${item.amount}</div>                           
                                </div>
                            </div>
                        </td>
                        <td style="float: right;" class="remove">
                            
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
function makePurchase() {
    console.log(generateBill(localStorage.getItem("user"), getCartByUser(localStorage.getItem("user"))));
    alert("Mua hàng thành công!");
    window.location = "home.html";
}
function getCartValue(userIdentify) {
    let cartValue = 0;

    addToCarts.forEach(item => {
        if (item.userIdentify === userIdentify) {
            const product = products.find(prod => prod.id === item.productID);
            if (product) {
                cartValue += product.price * item.amount;
            }
        }
    });

    return cartValue;
}
window.onload = function() {
    loadDataFromLocalStorage();
    renderCartItems(localStorage.getItem("user"));
    document.getElementById("user-name").innerHTML = getUserDetails(localStorage.getItem("user")).userName;
    document.getElementById("total-payment").innerHTML = getCartValue(localStorage.getItem("user")) + 35000;  
}
