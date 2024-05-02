feather.replace();
window.onload = function(){
    var SPMoi = '';
    for (var i = 0; i < 4; i++) {
        if (i % 4 == 0) {
            SPMoi += '<div class="row m-5">';
        }
        SPMoi += '<div class="product col-3">'
            + '<div class="product-image">'
            + '<img src="' + products[i].image + '" onclick="chitiet(' + products[i].id + ')"/>' + '</div>'
            + '<div class="product-name">' + products[i].productName + '</div>'
            + '<div class="product-price">' +
            '<span class="discounted">' + products[i].price + 'đ</span>'
            + '</div></div>';
        if (i % 4 == 3) {
            SPMoi += '</div>';
        }
    }
    document.getElementById("new-arrival-container").innerHTML = SPMoi;
    var SPBanChay ='';
    for (var i = 4; i < 8; i++) {
        if (i % 4 == 0) {
            SPBanChay += '<div class="row m-5">';
        }
        SPBanChay += '<div class="product col-3">'
            + '<div class="product-image">'
            + '<img src="' + products[i].image + '" onclick="chitiet(' + products[i].id + ')"/>' + '</div>'
            + '<div class="product-name">' + products[i].productName + '</div>'
            + '<div class="product-price">' +
            '<span class="discounted">' + products[i].price + 'đ</span>'
            + '</div></div>';
        if (i % 4 == 3) {
            SPBanChay += '</div>';
        }
    }
    document.getElementById("best-seller-container").innerHTML = SPBanChay;
    document.getElementById("cart-count").innerHTML = getCartByUser(localStorage.getItem("user")).length;
    document.getElementById("user-name").innerHTML = getUserDetails(localStorage.getItem("user")).userName;
}