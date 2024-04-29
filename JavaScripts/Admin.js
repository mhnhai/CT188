
window.onload = function(){

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
  
  document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách các thẻ <a> trong các <li> và thêm sự kiện "click" cho mỗi thẻ
    var links = document.querySelectorAll(".nav-link");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        // Lấy giá trị của thuộc tính "value" của thẻ <a>
        var id = this.getAttribute("data");
        // Ẩn tất cả các div có class "content"
        var contents = document.querySelectorAll(".content");
        contents.forEach(function(content) {
          content.classList.remove("d-block");
          content.classList.add("d-none");
        });
        
        // Hiển thị div có id tương ứng với giá trị của thẻ <a> được nhấn
        document.getElementById(id).classList.remove("d-none");
        document.getElementById(id).classList.add("d-block");
      });
    });
 });
  
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

