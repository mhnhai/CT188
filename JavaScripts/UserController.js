window.authenticateUser = function(userIdentify, password) {
    loadDataFromLocalStorage();
    const user = window.accounts.find(account => account.userIdentify === userIdentify && account.password === password);
    if (user) {
        const role = window.roles.find(role => role.id === user.roleID);
        alert("Login complete!")
        return { user, role };
    } else {
        return null;
    }
};

window.checkLoginState = function(userRole) {
    if (userRole) {
        if (userRole.role.name === 'Admin') {
            return 'Admin';
        } else if (userRole.role.name === 'user') {
            return 'User';
        }
    }
    return 'Invalid';
};

window.registerUser = function(userInfo, roleID) {
    const newUser = { id: window.accounts.length + 1, ...userInfo, roleID };
    window.accounts.push(newUser);
    importDataToLocalStorage();
    return newUser;
};

window.getUserDetails = function(userIdentify) {
    loadDataFromLocalStorage();
    return window.accounts.find(account => account.userIdentify === userIdentify);
};

window.getAllCustomers = function() {
    loadDataFromLocalStorage();
    return window.accounts.filter(user => {
        const role = window.roles.find(role => role.id === user.roleID);
        return role && role.name === 'Customers';
    });
};