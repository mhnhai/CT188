window.onload = function(){

<<<<<<< Updated upstream:admin.js
// Kiểm tra xem Local Storage có hỗ trợ không
if (typeof(Storage) !== "undefined") {
    // Nếu đã có dữ liệu sản phẩm trong Local Storage, lấy dữ liệu từ Local Storage
    if (localStorage.getItem("clothesData")) {
        clothesData = JSON.parse(localStorage.getItem("clothesData"));
    } else {
        // Nếu chưa có dữ liệu, lưu dữ liệu vào Local Storage
        localStorage.setItem("clothesData", JSON.stringify(clothesData));
    }
}

function showContent(contentId) {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';

     if (contentId === 'products') {
         // Hiển thị nội dung danh mục sản phẩm 
        displayClothes();
    }
}

// function displayClothes() {
//     var clothesTable = '<tbody id="product-tbody">';

//     // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sach
//     var storedData = localStorage.getItem('clothesData');
//     var parsedList = JSON.parse(storedData);
//     parsedList.forEach(function(clothes) {
//         clothesTable += '<tr><td>' + clothes.id + '</td><td>' + clothes.name + '</td><td>' + clothes.category + '</td><td id="soluong">' + clothes.soluong + '</td></tr>';
//     });
//     clothesTable += '</tbody>'; 
//     document.getElementById('product-tbody').innerHTML = clothesTable;
// }

=======
    // get data từ localstorage
    products = getListProducts() || products;
  }
  
  // ========= Các hàm liên quan tới danh sách sản phẩm =========
  function setListProducts(newList){
      window.localStorage.setItem('products',JSON.stringify(newList));
  }
  
  function getListProducts(newList){
      return JSON.parse(window.localStorage.getItem('products'));
  }
  
  function showContent(contentId) {
      var contents = document.getElementsByClassName('content');
      for (var i = 0; i < contents.length; i++) {
          contents[i].style.display = 'none';
      }
      document.getElementById(contentId).style.display = 'block';
  
       if (contentId === 'products') {
          // Hiển thị nội dung danh mục sản phẩm 
          displayClothes();
      }
  }
  
  function displayClothes() {
    // localStorage.clear();
      var clothesTable = '<tbody id="product-tbody">';
      // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sach
      products.forEach(function(clothes) {
          clothesTable += '<tr><td>' + clothes.id + '</td><td>' + clothes.productName + '</td><td>' + clothes.image + '</td><td id="soluong">' + clothes.price + '</td></tr>';
      });
      clothesTable += '</tbody>'; 
      document.getElementById('product-tbody').innerHTML = clothesTable;
  }
  
  
>>>>>>> Stashed changes:JavaScripts/Admin.js
