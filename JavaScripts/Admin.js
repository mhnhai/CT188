import { handleActiveTabs, showContent } from '../JavaScripts/AdminEventHandle.js';

// importDataToLocalStorage();
importDataToLocalStorage();

document.addEventListener('DOMContentLoaded', function() {
    handleActiveTabs();
});

     if (contentId === 'products') {
         // Hiển thị nội dung danh mục sản phẩm 
        displayClothes();
    }
}

function displayClothes() {
    var clothesTable = '<tbody id="product-tbody">';

    // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sach
    var storedData = localStorage.getItem('clothesData');
    var parsedList = JSON.parse(storedData);
    parsedList.forEach(function(clothes) {
        clothesTable += '<tr><td>' + clothes.id + '</td><td>' + clothes.name + '</td><td>' + clothes.category + '</td><td id="soluong">' + clothes.soluong + '</td></tr>';
    });
    clothesTable += '</tbody>'; 
    document.getElementById('product-tbody').innerHTML = clothesTable;
}
