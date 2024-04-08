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
  
  