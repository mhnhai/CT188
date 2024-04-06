// Danh sách dữ liệu quần áo
var clothesData = [
    { id: 1, name: 'Áo sơ mi', category: 'Áo', soluong: 10},
    { id: 2, name: 'Quần jeans', category: 'Quần', soluong: 10},
    { id: 3, name: 'Váy dài', category: 'Váy', soluong: 10},
    { id: 4, name: 'Áo len', category: 'Áo', soluong: 10},
    { id: 5, name: 'Quần short', category: 'Quần', soluong: 10},
    { id: 6, name: 'Áo khoác', category: 'Áo', soluong: 10},
    { id: 7, name: 'Áo thun', category: 'Áo', soluong: 10},
    { id: 8, name: 'Quần âu', category: 'Quần', soluong: 10}, 
];

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

