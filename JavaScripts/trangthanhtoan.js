function showCartItems(userIdentify) {
    const container = document.getElementById("cart-items-container"); // Assuming you have a container element with id "cart-items-container"
    let html = "";

    addToCarts.forEach((item) => {
        if (item.userIdentify === userIdentify) {
            const product = products.find((prod) => prod.id === item.productID);
            if (product) {
                html += `
                    <div class="row hienthisp">
                        <div class="col-sm-3 col-md-4">
                            <img style="border: 1px solid black; border-radius: 10px;" width="60px" src="${
                                product.image
                            }" alt="">
                            <sup><label style="font-size: 30px;" for="">${
                                item.amount
                            }</label></sup>
                        </div>
                        <div class="col-sm-9 col-md-4">
                            <p>${product.productName} <br>
                            ${product.sizes[0]}</p>
                        </div>
                        <div class="col-sm-9 col-md-4">
                            <p>${(product.price * item.amount).toLocaleString(
                                "vi-VN",
                                { style: "currency", currency: "VND" }
                            )}</p>
                        </div>
                    </div>
                `;
            }
        }
    });

    container.innerHTML = html;
}

function purchase() {
    console.log(
        generateBill(
            localStorage.getItem("user"),
            getCartByUser(localStorage.getItem("user"))
        )
    );
    alert("Mua hàng thành công!");
    window.location = "../index.html";
}

loadDataFromLocalStorage();

document.getElementById("bill-value").innerHTML = getCartValue(
    localStorage.getItem("user")
);
document.getElementById("sum-value").innerHTML =
    getCartValue(localStorage.getItem("user")) + 35000;
showCartItems(localStorage.getItem("user"));
console.log(localStorage.getItem("user"));
