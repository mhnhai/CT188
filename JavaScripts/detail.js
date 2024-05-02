function chitiet(id) {
    window.location.href = `detail.html?id=${id}`;
}

function showChiTiet(i) {
    var productdetail = '';
    productdetail += ' <div class="product-detail card">'
        + '<div class="row g-0"><div class="leftside col-md-5">'
        + '<img src="' + products[i].image + '"'
        + 'class="img-fluid rounded-start"/></div>'
        + '<div class="rightside col-md-7"><div class="card-body">'
        + '<h1 class="product-name card-title">'
        + '<input id="productID" style="display: none" value="' + products[i].id + '" ></h1>'
        + '<b>' + products[i].productName + '</b></h1>'
        + '<p class="produc-prices card-text">' + products[i].price + 'đ</p>'
        + '<div class="size"><b>Kích thước: </b><div class="size-option d-flex gap-5">'
        + '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="S"/>'
        + '<label class="form-check-label for="exampleRadios2">S</label></div>'
        + '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="M"/>'
        + '<label class="form-check-label for="exampleRadios2">M</label></div>'
        + '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="L"/>'
        + '<label class="form-check-label for="exampleRadios2">L</label></div>'
        + '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="XL" disabled/>'
        + '<label class="form-check-label for="exampleRadios2">XL</label></div>'
        + '</div></div></div>'
        + '<div class="quantity m-3"><b>Số lượng: </b>'
        + '<div id="buy-amount"><button class="minus-btn" onclick="decreaseQuantity()"><i data-feather="minus"></i></button><input type="text" name="amount" id="amount" value="1"><button class="plus-btn" onclick="increaseQuantity()">  <i data-feather="plus"></i></button></div></div>'
        +'<button class="btnhv" type="button" id="add" name="add" onclick="addItemToCart()"><span>Thêm vào giỏ hàng</span></button>'
    document.getElementById("detail").innerHTML = productdetail;
}
//load chi tiet
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = parseInt(value);
        });
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

function add(pd){   
    
}

function addItemToCart() {
    var userIdentify = localStorage.getItem("user");
    var productID = document.getElementById("productID").value;
    console.log(products);
    const user = window.accounts.find(account => account.userIdentify == userIdentify);
    const product = window.products.find(product => product.id == productID);
    
    if (!user) {
      console.error('User not found or not authenticated.');
      return;
    }
  
    if (!product) {
      console.error('Product not found.');
      return;
    }
  
    let existingCartItem = window.addToCarts.find(item => item.userIdentify == userIdentify && item.productID == productID);
    
    if (existingCartItem) {
      existingCartItem.amount += quantity;
    } else {
      window.addToCarts.push({
        userIdentify: userIdentify,
        productID: parseInt(productID),
        amount: quantity
      });
    }
  
    localStorage.setItem('addToCarts', JSON.stringify(window.addToCarts));
    console.log(addToCarts)
    console.log('Item added to cart successfully.');
}

window.onload = function() {
    document.getElementById("cart-count").innerHTML = getCartByUser(localStorage.getItem("user")).length;
    document.getElementById("user-name").innerHTML = getUserDetails(localStorage.getItem("user")).userName;
}

