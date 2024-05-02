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
        clothesTable += '<tr><td>' + products[i].id + '</td><td>' + products[i].productName + '</td><td>' + products[i].category + '</td><td id="soluong">' + products[i].amount + '</td></tr>';
    }
    clothesTable += '</tbody>'; 
    document.getElementById('product-tbody').innerHTML = clothesTable;
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
