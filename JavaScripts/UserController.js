window.authenticateUser = function(userIdentify, password) {
    loadDataFromLocalStorage();
    const user = window.accounts.find(account => account.userIdentify === userIdentify && account.password === password);
    if (user) {
        const role = window.roles.find(role => role.id === user.roleID);
        alert("Login complete!")
        return { user, role };
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!")
        return null;
    }
};

function addAccountIfUnique(userIdentify, password, userName, roleID) {
    const isUnique = !window.accounts.some(account => account.userIdentify === userIdentify);
  
    if (isUnique) {
      const newAccount = {
        id: window.accounts.length + 1,
        userIdentify: userIdentify,
        password: password,
        userName: userName,
        roleID: roleID
      };
      window.accounts.push(newAccount);
      return "New account added successfully.";
    } else {
      return "User identify already exists.";
    }
}

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
