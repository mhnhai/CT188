feather.replace(); // Load các icon
var newArrivalProducts = Array.from(products);

var bestSellerProducts = Array.from(products.reverse());

//#region Các hằng số
const autoScrollInterval = 3000; // Danh sách sản phẩm sẽ cuộn sau mỗi 3000 mili giây (ms)
const productShowingCount = 4; // Số sản phẩm hiển thị tối đa trên màn hình
//#endregion Các hằng số

//#region Các hàm chung
// Định dạng tiền tệ, VD: input 220000 -> output 220.000
var formatPrice = function (value) {
  return new Intl.NumberFormat("vi-VN").format(value);
};
//#endregion Các hàm chung

//#region HTML template
// Xây dựng các thẻ html để hiển thị product
var productHtmlBuilder = function (product) {
  return /* HTML */ `
    <div class="product col-3" onclick="chitiet(${product.id})">
      <div class="product-image">
        <img src="${product.image}" alt="${product.image}" />
      </div>
      <div class="product-name">${product.productName}</div>
      <div class="product-price">
        <span class="discounted">${formatPrice(product.price)}đ</span>
        <div class="size-container">
          <span>Kích cỡ: </span>
          ${product.sizes.map((element, index) => {
            return /* HTML */ ` <span>${element}</span> `;
          })}
        </div>
      </div>
    </div>
  `;
};
//#endregion HTML template

//#region Phần sản phẩm mới
var naInstance = document.querySelector("#new-arrival-container"); // Container chứa các sản phẩm mới

/* 1. Load các sản phẩm mới lên trang */
// 1.1 Dựng các html product
var naProductHtmlElements = "";

for (let product of newArrivalProducts) {
  naProductHtmlElements += productHtmlBuilder(product);
}
// 1.2 Thêm các product vào thẻ chứa
naInstance.innerHTML = naProductHtmlElements;

var naCount = newArrivalProducts.length; // Số lượng sản phẩm mới
var naProductToBeShowed = naCount - productShowingCount; // Số lượng các sản phẩm mới trong hàng đợi, chờ được hiển thị nhờ vào auto scrolling
var naWidth = naInstance.scrollWidth; // Độ dài tối đa có thể scroll của container

var naItemInstance = document.querySelector("#new-arrival-container .product"); // Một khung sản phẩm
var naItemWidth = naItemInstance.clientWidth; // Chiều dài tối đa của khung sản phẩm

var naMaxScroll = naProductToBeShowed * naItemWidth; // Độ dài tối đa có thể scroll sau khi trừ đi số sản phẩm đã hiển thị sẵn trên màn hình (4 sản phẩm)
var naCurrentScroll = 0; // Khởi tạo vị trí scroll ban đầu

// Hàm dùng để scroll của danh sách sản phẩm mới
var naScrollIntervalFunction = function () {
  if (naCurrentScroll + naItemWidth <= naMaxScroll) {
    naCurrentScroll += naItemWidth;
  } else {
    naCurrentScroll = 0;
  }

  naInstance.scroll({
    left: naCurrentScroll,
    behavior: "smooth",
  });
};

// Set interval: Sau mỗi {autoScrollInterval} giây, thì gọi hàm {naScrollIntervalFunction} một lần
// để thực hiện scroll tự động cho danh sách sản phẩm bán chạy
var naScrollIntervalId = window.setInterval(
  naScrollIntervalFunction,
  autoScrollInterval
);

// Khi con trỏ chuột nằm trên container của danh sách sản phẩm mới thì dừng scroll
naInstance.addEventListener("mouseover", function () {
  window.clearInterval(naScrollIntervalId);
});

// Khi con trỏ chuột ra khỏi container của danh sách sản phẩm mới thì bắt đầu scroll tự động trở lại
naInstance.addEventListener("mouseout", function () {
  naScrollIntervalId = window.setInterval(
    naScrollIntervalFunction,
    autoScrollInterval
  );
});

// Khi không thể scroll nữa thì trở lại đầu danh sách
naInstance.addEventListener("scrollend", function () {
  naCurrentScroll =
    Math.round(naInstance.scrollLeft / naItemWidth) * naItemWidth;
});

//#endregion Phần sản phẩm mới

//#region Phần sản phẩm bán chạy
var bsInstance = document.querySelector("#best-seller-container"); // Container chứa các sản phẩm bán chạy

/* 1. Load các sản phẩm bán chạy lên trang */
// 1.1 Dựng các html product
var bsProductHtmlElements = "";

for (let product of bestSellerProducts) {
  bsProductHtmlElements += productHtmlBuilder(product);
}
// 1.2 Thêm các product vào thẻ chứa
bsInstance.innerHTML = bsProductHtmlElements;

var bsCount = bestSellerProducts.length; // Số lượng sản phẩm bán chạy
var bsProductToBeShowed = bsCount - productShowingCount; // Số lượng các sản phẩm bán chạy trong hàng đợi, chờ được hiển thị nhờ vào auto scrolling
var bsWidth = bsInstance.scrollWidth; // Độ dài tối đa có thể scroll của container

var bsItemInstance = document.querySelector("#best-seller-container .product"); // Một khung sản phẩm
var bsItemWidth = bsItemInstance.clientWidth; // Chiều dài tối đa của khung sản phẩm

var bsMaxScroll = bsProductToBeShowed * bsItemWidth; // Độ dài tối đa có thể scroll sau khi trừ đi số sản phẩm đã hiển thị sẵn trên màn hình (4 sản phẩm)
var bsCurrentScroll = 0; // Khởi tạo vị trí scroll ban đầu

// Hàm dùng để scroll của danh sách sản phẩm bán chạy
var bsScrollIntervalFunction = function () {
  if (bsCurrentScroll + bsItemWidth <= bsMaxScroll) {
    bsCurrentScroll += bsItemWidth;
  } else {
    bsCurrentScroll = 0;
  }

  bsInstance.scroll({
    left: bsCurrentScroll,
    behavior: "smooth",
  });
};

// Set interval: Sau mỗi {autoScrollInterval} giây, thì gọi hàm {naScrollIntervalFunction} một lần
// để thực hiện scroll tự động cho danh sách sản phẩm bán chạy
var bsScrollIntervalId = window.setInterval(
  bsScrollIntervalFunction,
  autoScrollInterval
);

// Khi con trỏ chuột nằm trên container của danh sách sản phẩm bán chạy thì dừng scroll
bsInstance.addEventListener("mouseover", function () {
  window.clearInterval(bsScrollIntervalId);
});

// Khi con trỏ chuột ra khỏi container của danh sách sản phẩm mới thì bắt đầu scroll tự động trở lại
bsInstance.addEventListener("mouseout", function () {
  bsScrollIntervalId = window.setInterval(
    bsScrollIntervalFunction,
    autoScrollInterval
  );
});

// Khi không thể scroll nữa thì trở lại đầu danh sách
bsInstance.addEventListener("scrollend", function () {
  bsCurrentScroll =
    Math.round(bsInstance.scrollLeft / bsItemWidth) * bsItemWidth;
});
//#endregion Phần sản phẩm bán chạy

//#region Phần user
var username = document.querySelector("#user-name");

username.innerText =
  getUserDetails(localStorage.getItem("user"))?.userName ?? "Đăng nhập";
//#endregion Phần user

//#region Phần giỏ hàng
var cart = document.querySelector("#cart-count");

cart.innerText = getCartByUser(localStorage.getItem("user")).length;
//#endregion Phần giỏ hàng

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
