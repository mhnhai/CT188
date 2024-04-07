var roles = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "user"}
  ],
  
  accounts = [
    {"id": 1,"userIdentify": "Admin1","password": "12345678","userName": "Nguyen Toi","roleID": 1},
    {"id": 2,"userIdentify": "user1","password": "12345678","userName": "Nguyen Toi","roleID": 2},
    {"id": 3,"userIdentify": "user2","password": "12345678","userName": "Nguyen Toi","roleID": 2}
  ],
  
  brands =[
    {"id": 1,"brandName": "YaMe"},
    {"id": 2,"brandName": "Outerity"},
    {"id": 3,"brandName": "SWE"}
  ],
  
  products = [
    {"id": 1,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 2,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 3,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 4,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 5,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 6,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 7,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 8,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]},
    {"id": 9,"productName": "","image": "url","price": 0,"category": 1,"brandID": 1, "amount": 0,"sizes": ["S","M","L","XL"]}
  ],
  
  addToCarts = [
    {"userIdentify": "user1","productID": 1,"amount": 1},
    {"userIdentify": "user1","productID": 2,"amount": 1}
  ],
    
  bills = [
    {"id": 1,"userIdentify": "user1"},
    {"id": 2,"userIdentify": "user1"}
  ],
  
  purchasedProducts = [
    {"billID": 1,"productID": 1,"amount": 1},
    {"billID": 1,"productID": 2,"amount": 1}
  ];

// Lưu dữ liệu
function importDataToLocalStorage() {
  roles.forEach(item => {
    if (!localStorage.getItem('roles')) localStorage.setItem('roles', JSON.stringify(roles));
  });
  accounts.forEach(item => {
    if (!localStorage.getItem('accounts')) localStorage.setItem('accounts', JSON.stringify(accounts));
  });
  productTypes.forEach(item => {
    if (!localStorage.getItem('productTypes')) localStorage.setItem('productTypes', JSON.stringify(productTypes));
  });
  brands.forEach(item => {
    if (!localStorage.getItem('brands')) localStorage.setItem('brands', JSON.stringify(brands));
  });
  products.forEach(item => {
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(products));
  });
  addToCarts.forEach(item => {
    if (!localStorage.getItem('addToCarts')) localStorage.setItem('addToCarts', JSON.stringify(addToCarts));
  });
  bills.forEach(item => {
    if (!localStorage.getItem('bills')) localStorage.setItem('bills', JSON.stringify(bills));
  });
  purchasedProducts.forEach(item => {
    if (!localStorage.getItem('purchasedProducts')) localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
  });
}

// Lấy dữ liệu
function loadDataFromLocalStorage() {
  roles = localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : roles;
  accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : accounts;
  brands = localStorage.getItem('brands') ? JSON.parse(localStorage.getItem('brands')) : brands;
  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : products;
  addToCarts = localStorage.getItem('addToCarts') ? JSON.parse(localStorage.getItem('addToCarts')) : addToCarts;
  bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : bills;
  purchasedProducts = localStorage.getItem('purchasedProducts') ? JSON.parse(localStorage.getItem('purchasedProducts')) : purchasedProducts;
}

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

// Thêm hàng vào giỏ hàng || Cập nhật số lượng
function addToCart(userIdentify, productID, amount) {
  loadDataFromLocalStorage();
  const product = products.find(product => product.id === productID);
  if (!product) {
      throw new Error('Product not found');
  }
  const existingItemIndex = addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);

  if (existingItemIndex !== -1) {
      addToCarts[existingItemIndex].amount += amount;
  } else {
      addToCarts.push({ userIdentify, productID, amount });
  }
  importDataToLocalStorage();
}

// Xóa hàng khỏi giỏ hàng
function removeFromCart(userIdentify, productID) {
  loadDataFromLocalStorage();
  const indexToRemove = addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);
  if (indexToRemove !== -1) {
      addToCarts.splice(indexToRemove, 1);
  } else {
      throw new Error('Product not found in the cart');
  }
  importDataToLocalStorage();
}

// Lấy hàng từ giỏ hàng
function getItemFromCart(userIdentify, productID) {
  loadDataFromLocalStorage();
  const cartItem = addToCarts.find(item => item.userIdentify === userIdentify && item.productID === productID);

  if (cartItem) {
      const product = products.find(product => product.id === cartItem.productID);

      if (product) {
          return {
              productID: cartItem.productID,
              productName: product.productName,
              amount: cartItem.amount,
              price: product.price,
              totalPrice: product.price * cartItem.amount
          };
      } else {
          return {
              productID: cartItem.productID,
              amount: cartItem.amount,
              errorMessage: 'Product not found'
          };
      }
  } else {
      return null;
  }
}

// Xem thông tin
function viewItemDetail(productID) {
  loadDataFromLocalStorage();
  const product = products.find(product => product.id === productID);
  if (!product) {
      throw new Error('Product not found');
  }
  return product;
}

// Mua hàng
function generateBill(userIdentify, itemsToPurchase) {
  loadDataFromLocalStorage();
  if (addToCarts.filter(item => item.userIdentify === userIdentify).length === 0) {
      throw new Error('Cart is empty');
  }

  const newBillId = bills.length + 1;
  const newBill = { id: newBillId, userIdentify };
  bills.push(newBill);

  itemsToPurchase.forEach(item => {
      const cartItem = addToCarts.find(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
      const amountToPurchase = Math.min(cartItem.amount, item.amount);
      if (!cartItem) {
          throw new Error(`Product with ID ${item.productID} not found in the cart`);
      }
      purchasedProducts.push({ billID: newBillId, productID: item.productID, amount: amountToPurchase});
      const productIndex = products.findIndex(product => product.id === item.productID);
          if (productIndex !== -1) {
              products[productIndex].amount -= amountToPurchase;
          }
  });

  itemsToPurchase.forEach(item => {
      const cartItemIndex = addToCarts.findIndex(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
      if (cartItemIndex !== -1) {
          addToCarts[cartItemIndex].amount -= Math.min(addToCarts[cartItemIndex].amount, item.amount);
          if (addToCarts[cartItemIndex].amount === 0) {
              addToCarts.splice(cartItemIndex, 1);
          }
      }
  });
  importDataToLocalStorage();
  return newBill;
}

// Ví dụ dữ liệu đầu vào
const userIdentify = "user1";
const itemsToPurchase = [
  { productID: 1, amount: 2 },
  { productID: 2, amount: 1 } 
];

function addProduct(product) {
  loadDataFromLocalStorage();
  const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  product.id = newProductId;
  products.push(product);
  importDataToLocalStorage();
}
  
function addBrand(brand) {
  loadDataFromLocalStorage();
  const newBrandId = brands.length > 0 ? brands[brands.length - 1].id + 1 : 1;
  brand.id = newBrandId;
  brands.push(brand);
  localStorage.setItem('brands', JSON.stringify(brands));
  importDataToLocalStorage();
}
  
const newProduct = {
  productName: "New Product Name",
  image: "url",
  price: 20,
  typeID: 1,
  brandID: 1,
  amount: 10,
  sizes: ["S", "M", "L", "XL"]
};
addProduct(newProduct);
  
const newBrand = {
  brandName: "New Brand Name"
};
addBrand(newBrand);

function getBills() {
  loadDataFromLocalStorage();
  return bills;
}

function getBill(billID) {
  loadDataFromLocalStorage();
  return bills.find(bill => bill.id === billID);
}

function getPurchasedProducts(billID) {
  loadDataFromLocalStorage();
  return purchasedProducts.filter(product => product.billID === billID);
}