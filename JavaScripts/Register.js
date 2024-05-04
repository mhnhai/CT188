function createUser() {
    var frm = document.forms["myForm"];
    var pwd = frm["pwd"].value;
    var repwd = frm["repwd"].value;
    if (pwd != repwd) {
        alert("Mật Khẩu không khớp");
        return false;
    }
    var userName = frm["name"].value;
    var userIdentify = frm["identify"].value;
    var createState = addAccountIfUnique(userIdentify, pwd, userName, 2);
    alert(createState)
    importDataToLocalStorage();
    console.log(accounts);
    // return createState;
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
