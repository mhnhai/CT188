import {importDataToLocalStorage, loadDataFromLocalStorage} from "./Main";

// Đăng nhập
function authenticateUser(userIdentify, password) {
    loadDataFromLocalStorage();
    const user = accounts.find(account => account.userIdentify === userIdentify && account.password === password);
    if (user) {
        const role = roles.find(role => role.id === user.roleID);
        alert("Login complete!")
        return { user, role };
    } else {
        return null;
    }
}

function checkLoginState(userRole) {
    if (userRole) {
        if (userRole.role.name === 'Admin') {
            return 'Admin';
        } else if (userRole.role.name === 'user') {
            return 'User';
        }
    }
    return 'Invalid';
}

// Đăng ký tài khoản
function registerUser(userInfo, roleID) {
    const newUser = { id: accounts.length + 1, ...userInfo, roleID };
    accounts.push(newUser);
    importDataToLocalStorage();
    return newUser;
}

function getUserDetails(userIdentify) {
    loadDataFromLocalStorage();
    return accounts.find(account => account.userIdentify === userIdentify);
}

exports = {
    authenticateUser,
    checkLoginState,
    registerUser,
    getUserDetails
};