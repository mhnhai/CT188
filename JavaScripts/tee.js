window.onload = function () {
    var sanpham = "";
    var j = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === "Tee" || products[i].category === "Polo") {
            if (j % 4 == 0) {
                sanpham += '<div class="row m-5">';
            }
            sanpham +=
                '<div class="product col-3 thu-nghiem-zoom">' +
                '<div class="product-image">' +
                '<img src="' +
                products[i].image +
                '" onclick="chitiet(' +
                products[i].id +
                ')"/>' +
                "</div>" +
                '<div class="product-name">' +
                products[i].productName +
                "</div>" +
                '<div class="product-price">' +
                '<span class="discounted">' +
                products[i].price +
                "đ</span>" +
                "</div></div>";
            if (j % 4 == 3) {
                sanpham += "</div>";
            }
            j++;
        }
    }
    document.getElementById("sanpham").innerHTML = sanpham;
};
