function login() {
  importDataToLocalStorage();

  var frm = document.forms["myForm"];
  var userName = frm["identify"].value;
  var pwd = frm["pwd"].value;

  currentUser = authenticateUser(userName, pwd);
  window.localStorage.setItem("user", currentUser.user.userIdentify);
  if (currentUser.role.id == 1) {
    frm.action = "../HTML/admin.html";
  } else if (currentUser.role.id == 2) {
    frm.action = "../HTML/home.html";
  }
}

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
