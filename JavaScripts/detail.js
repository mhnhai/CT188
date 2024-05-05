function chitiet(id) {
  window.location.href = `detail.html?id=${id}`;
}

function showChiTiet(i) {
  var productdetail = "";
  productdetail +=
    ' <div class="product-detail card">' +
    '<div class="row g-0"><div class="leftside col-md-5">' +
    '<img src="' +
    products[i].image +
    '"' +
    'class="img-fluid rounded-start"/></div>' +
    '<div class="rightside col-md-7"><div class="card-body">' +
    '<h1 class="product-name card-title">' +
    '<input id="productID" style="display: none" value="' +
    products[i].id +
    '" ></h1>' +
    "<b>" +
    products[i].productName +
    "</b></h1>" +
    '<p class="produc-prices card-text">' +
    products[i].price +
    "đ</p>" +
    '<div class="size"><b>Kích thước: </b><div class="size-option d-flex gap-5">' +
    '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="S"/>' +
    '<label class="form-check-label for="exampleRadios2">S</label></div>' +
    '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="M"/>' +
    '<label class="form-check-label for="exampleRadios2">M</label></div>' +
    '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="L"/>' +
    '<label class="form-check-label for="exampleRadios2">L</label></div>' +
    '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="XL" disabled/>' +
    '<label class="form-check-label for="exampleRadios2">XL</label></div>' +
    "</div></div></div>" +
    '<div class="quantity m-3"><b>Số lượng: </b>' +
    '<div id="buy-amount"><button class="minus-btn" onclick="decreaseQuantity()"><i data-feather="minus"></i></button><input type="text" name="amount" id="amount" value="1"><button class="plus-btn" onclick="increaseQuantity()">  <i data-feather="plus"></i></button></div></div>' +
    '<button class="btnhv" type="button" id="add" name="add" onclick="addItemToCart()"><span>Thêm vào giỏ hàng</span></button>'
    + `  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                <div class="accordion-title">Hướng dẫn mua hàng</div>
            </button>
        </h2>
        <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
        >
            <div class="accordion-body">
                <ul>
                    <b>Hướng dẫn sử dụng website LUSH:</b>
                    <li>- Các bước mua hàng tại Web LUSH:</li>
                    <li>
                        + Chọn sản phẩm -> chọn Size sản phẩm -> thêm
                        vào giỏ hàng -> thanh toán
                    </li>
                    <li>
                        - Các bước mua hàng tại Web LUSH:(Trong trường
                        hợp các bạn mua nhiều sản phẩm, các bạn thêm
                        từng sản phẩm vào giỏ hàng, sau khi đã đủ sản
                        phẩm và số lượng , các bạn vui lòng kiểm tra
                        thật kỹ giỏ hàng và ấn THANH TOÁN)
                    </li>
                    <li>
                        + Thanh toán -> Điền đầy đủ thông tin -> Tên ->
                        Số Điện Thoại -> Địa chỉ nhận hàng - > Mail.
                    </li>
                    <li>
                        ( Đơn hàng thành công là khi các bạn điền đầy đủ
                        thông tin và chính xác, các bạn cần điền đầy đủ
                        thông tin và Mail để LUSH có thể xác nhận đơn
                        hàng qua Mail cho các bạn.)
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
aria-expanded="false"
                aria-controls="collapseTwo"
            >
                <div class="accordion-title">Chính sách vận chuyển</div>
            </button>
        </h2>
        <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
        >
            <div class="accordion-body">
                <ul>
                    <li>
                        <b>– Đơn hàng nội thành HCM :</b> dự kiến trong
                        vòng 1-2 ngày sẽ nhận được kể từ ngày chốt đơn.
                        Nếu quý khách có nhu cầu nhận hàng trong ngày,
                        Quý Khách có thể nhờ nhân viên hỗ trợ giao ngay
                        thông qua các ứng dụng như
                        <b>Ahamove, Grabnow</b>. Phí ship sẽ được tính
                        theo giá của ứng dụng.
                    </li>
                    <li>
                        <b>– Đơn hàng từ các tỉnh thành khác :</b> dự
                        kiến 2-3 ngày sẽ nhận được kể từ ngày chốt đơn.
                    </li>
                    <li>
                        Khách hàng sẽ được kiểm tra sản phẩm trước khi
                        thanh toán cho bên vận chuyển. Nếu không đồng ý
                        nhận hàng sau khi hàng đã được gửi đi với các lý
                        do cá nhân, quý khách vui lòng thanh toán khoản
                        phí vận chuyển.
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
            >
                <div class="accordion-title">Đổi trả hàng</div>
            </button>
        </h2>
        <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
        >
            <div class="accordion-body">
<ul>
                    <li>
                        - Hàng mua online được đổi trong vòng 7 ngày
                        (tính từ ngày in hoá đơn) với điều kiện sản phẩm
                        trong tình trạng nguyên vẹn, còn nguyên tag
                        (chưa cắt) và hóa đơn.
                    </li>
                    <li>
                        - Đối với mỗi hóa đơn, khách hàng được đổi hàng
                        01 lần. Nếu đổi hàng qua kênh online, khách hàng
                        sẽ chịu phí vận chuyển cho việc đổi trả.
                    </li>
                    <li>
                        - Khi sản phẩm nhận được bị lỗi ( rách, bị phai
                        màu quá nhiều, …), hoặc không đúng với sản phẩm
                        đặt hàng ( sai mẫu, sai màu, size )
                    </li>
                    <li>
                        - LUSH không hỗ trợ đổi các sản phẩm được khuyến
                        mãi, giảm giá, random pack.
                    </li>
                    <li>
                        Áp dụng trả hàng hoàn tiền với các trường hợp
                        nhận hàng lỗi (đảm bảo hàng còn nguyên tem tag
                        và chưa qua sử dụng) nhưng không muốn đổi sản
                        phẩm khác.
                    </li>
                    <li>
                        Xin vui lòng liên hệ hotline <b>0879 592 668</b> để
                        được hướng dẫn chi tiết.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
  document.getElementById("detail").innerHTML = productdetail;
}
//load chi tiet
var vars = {};
var parts = window.location.href.replace(
  /[?&]+([^=&]+)=([^&]*)/gi,
  function (m, key, value) {
    vars[key] = parseInt(value);
  }
);
showChiTiet(vars.id - 1);

feather.replace();
let quantity = 1;

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}

function increaseQuantity() {
  quantity++;
  updateQuantity();
}

function updateQuantity() {
  document.getElementById("amount").value = quantity;
}

function add(pd) {}

function addItemToCart() {
  var userIdentify = localStorage.getItem("user");
  var productID = document.getElementById("productID").value;
  const user = window.accounts.find(
    (account) => account.userIdentify == userIdentify
  );
  const product = window.products.find((product) => product.id == productID);
  if (!user) {
    console.error("User not found or not authenticated.");
    return;
  }

  if (!product) {
    console.error("Product not found.");
    return;
  }

  let existingCartItem = window.addToCarts.find(
    (item) => item.userIdentify == userIdentify && item.productID == productID
  );

  if (existingCartItem) {
    if (product.amount >= existingCartItem.amount + quantity) {
      existingCartItem.amount += quantity;
    } else {
      alert("Không đủ sản phẩm!");
      return;
    }
  } else if (!existingCartItem && product.amount < quantity) {
    if (product.amount < quantity) {
      alert("Không đủ sản phẩm!");
      return;
    }
  } else {
    window.addToCarts.push({
      userIdentify: userIdentify,
      productID: parseInt(productID),
      amount: quantity,
    });
  }

  localStorage.setItem("addToCarts", JSON.stringify(window.addToCarts));

  console.log(addToCarts);
  console.log("Item added to cart successfully.");
  alert("Thêm vào giỏ hàng thành công");
  document.getElementById("cart-count").innerHTML = getCartByUser(
    localStorage.getItem("user")
  ).length;
}

window.onload = function () {
  document.getElementById("cart-count").innerHTML = getCartByUser(
    localStorage.getItem("user")
  ).length;
  document.getElementById("user-name").innerHTML = getUserDetails(
    localStorage.getItem("user")
  ).userName;
};

//#region Phần tìm kiếm
// 1. Xử lý search input: nhấn enter trong khi nhập thì thực hiện tìm kiếm
var searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keypress", function (event) {
  if (
    event.key === "Enter" &&
    searchInput.value !== null &&
    searchInput.value !== undefined &&
    searchInput.value.length !== 0
  ) {
    window.location.href = `/HTML/trangtimkiem.html?search=${searchInput.value}`;
  }
});

// 2. Xử lý nút search: nhấn nút để thực hiện tìm kiếm
var searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function (event) {
  if (
    searchInput.value !== null &&
    searchInput.value !== undefined &&
    searchInput.value.length !== 0
  ) {
    window.location.href = `/HTML/trangtimkiem.html?search=${searchInput.value}`;
  }
});
//#endregion Phần tìm kiếm
