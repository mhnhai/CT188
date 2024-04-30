window.onload = function(){
    console.log(products.length);
    var sanpham = '';
    for(var i = 0; i < products.length;i++){
        if(i%4 == 0){
            sanpham += '<div class="row">';
        }
        sanpham += '<div class="product col-3">'
        +'<div class="product-image">'
        +'<img src="'+ products[i].image +'" alt="" />'+'</div>'
        +'<div class="product-name">' + products[i].productName+'</div>'
        +'<div class="product-price">'+
        '<span class="discounted">'+products[i].price+'</span>'
        +'</div></div>';
        if(i%4 == 3){
            sanpham += '</div>';
        }
    }
    document.getElementById("sanpham").innerHTML = sanpham;
}