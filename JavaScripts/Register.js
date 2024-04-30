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