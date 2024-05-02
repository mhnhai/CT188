function chitiet(id) {
    window.location.href = `detail.html?id=${id}`;
}

function showChiTiet(i) {
    var productdetail = "";
    productdetail +=
        ' <div class="product-detail card">' +
        '<div class="row g-0"><div class="leftside col-md-5">' +
        '<img src="' +
        products[i].image +
        '"' +
        'class="img-fluid rounded-start"/></div>' +
        '<div class="rightside col-md-7"><div class="card-body">' +
        '<h1 class="product-name card-title">' +
        "<b>" +
        products[i].productName +
        "</b></h1>" +
        '<p class="produc-prices card-text">' +
        products[i].price +
        "đ</p>" +
        '<div class="size"><b>Kích thước: </b><div class="size-option d-flex gap-5">' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="S"/>' +
        '<label class="form-check-label for="exampleRadios2">S</label></div>' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="M"/>' +
        '<label class="form-check-label for="exampleRadios2">M</label></div>' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="L"/>' +
        '<label class="form-check-label for="exampleRadios2">L</label></div>' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="XL" disabled/>' +
        '<label class="form-check-label for="exampleRadios2">XL</label></div>' +
        "</div></div></div>" +
        '<div class="quantity m-3"><b>Số lượng: </b>' +
        '<div class="buy-amount"><button class="minus-btn" onclick="decreaseQuantity()"><i data-feather="minus"></i></button><input type="text" name="amount" id="amount" value="1"><button class="plus-btn" onclick="increaseQuantity()">  <i data-feather="plus"></i></button></div></div>' +
        '<button class="btnhv" type="button" id="add" name="add" onclick="add(' +
        products[i] +
        ')"><span>Thêm vào giỏ hàng</span></button>' +
        '<div class="accordion accordion-flush" id="accordionFlushExample">'  +
        `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <b>MÔ TẢ</b>
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"><>NOCTURNAL ® Dumb Heart Tee
                <ul><b>
                <li>Slogan “Love is being dumb together’ với ý nghĩa yêu là có thể thoải mái cùng nhau thể hiện những khía cạnh vô tư, ngốc nghếch nhất mà không cần e ngại hay giữ gìn hình tượng. Một tình yêu đẹp nơi cả hai có thể là chính mình.</li>
                <li>Artwork Kết hợp trái tim thêu 3D lót nhung siêu xịn sò.</li>
                <li>Chất liệu : Prime Cotton 100% – Chất vải mới siêu xịn, dày dặn hơn & giảm nhăn đến 70%.</li>
                <li>Các chi tiết chữ in lụa cao cấp, sắc nét ở cả mặt trước & mặt sau áo.</li>
                <li> Size: S / M / L / XL</li>
                </ul>
                Xem từng ảnh để thấy những chi tiết thú vị nhé!
                <br>
                Được chăm chút từ chất liệu, form dáng, đường may, hình in cho đến khâu đóng gói và hậu mãi, chiếc áo xinh xẻo này sẽ làm hài lòng cả những vị khách khó tính nhất.

 </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <b>VẬN CHUYỂN</b>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                 <b>CHÍNH SÁCH ĐỔI TRẢ</b>
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div> 
        </div>`;
    document.getElementById("detail").innerHTML = productdetail;
}
//load chi tiet
var vars = {};
var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = parseInt(value);
    }
);
showChiTiet(vars.id - 1);

feather.replace();
let quantity = 1;

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

function increaseQuantity() {
    quantity++;
    updateQuantity();
}

function updateQuantity() {
    document.getElementById("amount").value = quantity;
}

function add(pd) {}


function addItemToCart() {
    var userIdentify = localStorage.getItem("user");
    var productID = document.getElementById("productID").value;
    console.log(products);
    const user = window.accounts.find(
        (account) => account.userIdentify == userIdentify
    );
    const product = window.products.find((product) => product.id == productID);

    if (!user) {
        console.error("User not found or not authenticated.");
        return;
    }

    if (!product) {
        console.error("Product not found.");
        return;
    }

    let existingCartItem = window.addToCarts.find(
        (item) =>
            item.userIdentify == userIdentify && item.productID == productID
    );

    if (existingCartItem) {
        existingCartItem.amount += quantity;
    } else {
        window.addToCarts.push({
            userIdentify: userIdentify,
            productID: parseInt(productID),
            amount: quantity,
        });
    }

    localStorage.setItem("addToCarts", JSON.stringify(window.addToCarts));
    console.log(addToCarts);
    console.log("Item added to cart successfully.");
    alert("Thêm vào giỏ hàng thành công");
}

window.onload = function () {
    document.getElementById("cart-count").innerHTML = getCartByUser(
        localStorage.getItem("user")
    ).length;
    document.getElementById("user-name").innerHTML = getUserDetails(
        localStorage.getItem("user")
    ).userName;
};
