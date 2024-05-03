function login() {
    // importDataToLocalStorage();
    var frm = document.forms["myForm"];
    var userName = frm["identify"].value;
    var pwd = frm["pwd"].value;

    currentUser = authenticateUser(userName, pwd);
    window.localStorage.setItem("user", currentUser.user.userIdentify);
    if(currentUser.role.id == 1) {
        frm.action = "../HTML/admin.html"
    }
    else if(currentUser.role.id == 2) {
        frm.action = "../HTML/home.html"
    }
}

