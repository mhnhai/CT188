export function handleActiveTabs() {
    const contentId = ['home', 'products', 'orders', 'customers', ''];
    // Lấy tất cả các tab
    let tabs = document.querySelectorAll('.nav-link');
    var urlWithoutQueryString = window.location.pathname;
    history.replaceState(null, '', urlWithoutQueryString);
    
    for (var i = 0; i < tabs.length; i++) {
        const item = contentId[i];
        tabs[i].addEventListener('click', function() {
            // Xóa lớp active khỏi tất cả các tab
            tabs.forEach(t => t.classList.remove('active'));
            // Thêm lớp active cho tab được click
            this.classList.add('active');
            showContent(item);
        });
    }
    // Lặp qua từng tab và thêm sự kiện click
    
}

// Import function to display clothes if needed
export function showContent(contentId) {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';

    if (contentId === 'products') {
        // Hiển thị nội dung danh mục sản phẩm 
        displayClothes();
    }
    else if (contentId === 'home') {

    }
    else if (contentId === 'orders') {
        displayBills();
        
    }
    else if (contentId === 'customers') {
        displayCustomers();
    }
}

function displayClothes() {
    var clothesTable = '<tbody id="product-tbody">';

    // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sách
    loadDataFromLocalStorage();
    for (var i = 0; i < products.length; i++) {
        var pd = window.products[i];
        clothesTable += `<tr><td>${pd.id}</td><td>${pd.productName}</td><td>${pd.category}</td><td id="price">${pd.price}</td><td id="soluong"> ${pd.amount}</td><td id="img"><img src="${pd.image}"></td>`;
        clothesTable += `<td><button type="button" id="${pd.id}" class="btn btn-dark editBtn" data-bs-toggle="modal" data-bs-target="#editProductModal">Sửa</button></td></tr>`;
    }
    clothesTable += `</tbody>`; 
    document.getElementById('product-tbody').innerHTML = clothesTable;
    var btns = document.getElementsByClassName("editBtn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(event) {
            // Lấy nút mà người dùng đã click
            var idBtn = parseInt(event.target.id-1);
            var a = document.getElementById("editForm");
            a.name.value = products[idBtn].productName;
            a.category.value = products[idBtn].category;
            a.price.value = products[idBtn].price;
            a.quantity.value = products[idBtn].amount;
            var b = document.getElementById("imgsrc");
            b.src = products[idBtn].image;
            a.id.value = idBtn;
        });
    }
}

function displayBills() {
    var billsTable = '<tbody id="bills-tbody">';
    
    // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sách
    loadDataFromLocalStorage();
    for (var i = 0; i < bills.length; i++) {
        billsTable += '<tr><td>' + bills[i].id + '</td><td>' 
        + accounts.find(account => account.userIdentify === bills[i].userIdentify).userName
        + '</td><td>' 
        + getPurchasedProducts(bills[i].id).length
        + '</td><td id="soluong">' 
        + getBillValue(bills[i].id);
        + '</td></tr>';
    }
    billsTable += '</tbody>'; 
    document.getElementById('bills-tbody').innerHTML = billsTable;
}

function displayCustomers() {
    var customersTable = '<tbody id="customers-tbody">';
    
    // Lấy dữ liệu từ localStorage và chuyển đổi thành danh sách
    loadDataFromLocalStorage();
    var customers = getAllCustomers();
    for (var i = 0; i < customers.length; i++) {
        customersTable += '<tr><td>' + customers[i].id + '</td><td>' 
        + accounts.find(account => account.userIdentify === customers[i].userIdentify).userName
        + '</td><td id="soluong">' 
        + getAllBillsByUserId(customers[i].userIdentify).length
        + '</td></tr>';
    }
    customersTable += '</tbody>'; 
    document.getElementById('customers-tbody').innerHTML = customersTable;
}
