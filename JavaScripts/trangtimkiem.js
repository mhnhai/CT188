feather.replace();

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

//#region Phần render các sản phẩm tìm được
// 1. Lọc các sản phẩm trong cửa hàng
function filterOutProducts() {
	// Lấy nội dung cần lọc từ URL hiện tại
	var searchQuery = new URL(window.location).searchParams.get("search") ?? null;

	if (
		searchQuery !== null &&
		searchQuery !== undefined &&
		searchQuery.length !== 0
	) {
		return {
			products: products.filter((x) => x.productName.toLowerCase().includes(searchQuery.toLocaleLowerCase())),
			searchQuery: searchQuery
		}
	} else return {
		products: [],
		searchQuery: ""
	};
}

function renderSearchResult() {
	var filteredProducts = filterOutProducts();

	// Hiển thị số sản phẩm tìm được
	var count = document.querySelector("#lbSoSanPham");
	count.innerText = `Có ${filteredProducts.products.length} sản phẩm được tìm thấy khớp với "${filteredProducts.searchQuery}"`;

	// Hiển thị các sản phẩm
	var sanphamHtml = "";
	var j = 0;
	for (var i = 0; i < filteredProducts.products.length; i++) {
		if (j % 4 == 0) {
			sanphamHtml += '<div class="row m-5">';
		}
		sanphamHtml +=
			'<div class="product col-3 thu-nghiem-zoom">' +
			'<div class="product-image">' +
			'<img src="' +
			filteredProducts.products[i].image +
			'" onclick="chitiet(' +
			filteredProducts.products[i].id +
			')"/>' +
			"</div>" +
			'<div class="product-name">' +
			filteredProducts.products[i].productName +
			"</div>" +
			'<div class="product-price">' +
			'<span class="discounted">' +
			filteredProducts.products[i].price +
			"đ</span>" +
			"</div></div>";
		if (j % 4 == 3) {
			sanphamHtml += "</div>";
		}
		j++;
	}
	document.getElementById("sanpham").innerHTML = sanphamHtml;
}

// gọi hàm render
renderSearchResult();

//#endregion Phần render các sản phẩm tìm được

// document.getElementById("cart-count").innerHTML = getCartByUser(localStorage.getItem("user")).length;
// document.getElementById("user-name").innerHTML = getUserDetails(localStorage.getItem("user")).userName;

// var currentPage = 1;
// var totalPages = 4;

// var prevBtn = document.getElementById("prevBtn");
// var nextBtn = document.getElementById("nextBtn");
// var pageBtns = document.getElementsByClassName("pageBtn");

// function updateButtons() {
//   if (currentPage === 1) {
//     prevBtn.classList.add("hide");
//   } else {
//     prevBtn.classList.remove("hide");
//   }

//   if (currentPage === totalPages) {
//     nextBtn.classList.add("hide");
//   } else {
//     nextBtn.classList.remove("hide");
//   }

//   for (var i = 0; i < pageBtns.length; i++) {
//     if (i + 1 === currentPage) {
//       pageBtns[i].classList.add("active");
//     } else {
//       pageBtns[i].classList.remove("active");
//     }
//   }
// }

// function goToPage(page) {
//   if (page >= 1 && page <= totalPages) {
//     currentPage = page;
//     updateButtons();
//     // TODO: Cập nhật nội dung trang web tại đây khi người dùng chuyển trang
//   }
// }

// prevBtn.addEventListener("click", function () {
//   goToPage(currentPage - 1);
// });

// nextBtn.addEventListener("click", function () {
//   goToPage(currentPage + 1);
// });

// for (var i = 0; i < pageBtns.length; i++) {
//   (function (i) {
//     pageBtns[i].addEventListener("click", function () {
//       goToPage(i + 1);
//     });
//   })(i);
// }

// updateButtons();

// //ham tim kiem
// function kt(event) {
//   var key = event.key;
// 	// console.log(key);
//   if (key == 13){
//     timkiem();
//   }
// }

// function timkiem(){
//   const keywords = document.getElementsByClassName("input-search")[0].value.toLowerCase();
//   //data sau khi lay tu keywords
//   const filteredClothing = products.filter(clothing => clothing.productName.toLowerCase().includes(keywords));
//   console.log(filteredClothing);
// }
