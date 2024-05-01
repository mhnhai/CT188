window.onload = function () {
    var sanpham = '';
    for (var i = 0; i < products.length; i++) {
        if (i % 4 == 0) {
            sanpham += '<div class="row m-5">';
        }
        sanpham += '<div class="product col-3">'
            + '<div class="product-image">'
            + '<img src="' + products[i].image + '" onclick="chitiet(' + products[i].id + ')"/>' + '</div>'
            + '<div class="product-name">' + products[i].productName + '</div>'
            + '<div class="product-price">' +
            '<span class="discounted">' + products[i].price + 'đ</span>'
            + '</div></div>';
        if (i % 4 == 3) {
            sanpham += '</div>';
        }
    }
    document.getElementById("sanpham").innerHTML = sanpham;

}