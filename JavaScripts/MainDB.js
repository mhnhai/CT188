window.roles = [
  {"id": 1, "name": "Admin"},
  {"id": 2, "name": "Customers"}
];

window.accounts = [
  {"id": 1,"userIdentify": "Admin1","password": "12345678","userName": "Nguyen Toi","roleID": 1},
  {"id": 2,"userIdentify": "user1","password": "12345678","userName": "Nguyen Toi","roleID": 2},
  {"id": 3,"userIdentify": "user2","password": "12345678","userName": "Nguyen Toi","roleID": 2}
];

window.products = [
  {"id": 1,"productName": "vay","image": "../images/products/id001.jpg","price": 60000,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 2,"productName": "quan","image": "../images/products/id002.jpg","price": 20000,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 3,"productName": "ao","image": "../images/products/id003.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 4,"productName": "d","image": "../images/products/id004.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 5,"productName": "ao","image": "../images/products/id005.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 6,"productName": "a","image": "../images/products/id005.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 7,"productName": "bb","image": "../images/products/id007.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 8,"productName": "c","image": "../images/products/id001.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 9,"productName": "ac","image": "../images/products/id001.jpg","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]}
];

window.addToCarts = [
  {"userIdentify": "user1","productID": 1,"amount": 1},
  {"userIdentify": "user1","productID": 2,"amount": 1}
];

window.bills = [
  {"id": 1,"userIdentify": "user1"},
  {"id": 2,"userIdentify": "user1"}
];

window.purchasedProducts = [
  {"billID": 1,"productID": 1,"amount": 1},
  {"billID": 1,"productID": 2,"amount": 1}
];

window.importDataToLocalStorage = function() {
  localStorage.setItem('roles', JSON.stringify(window.roles));
  localStorage.setItem('accounts', JSON.stringify(window.accounts));
  localStorage.setItem('products', JSON.stringify(window.products));
  localStorage.setItem('addToCarts', JSON.stringify(window.addToCarts));
  localStorage.setItem('bills', JSON.stringify(window.bills));
  localStorage.setItem('purchasedProducts', JSON.stringify(window.purchasedProducts));
};

window.loadDataFromLocalStorage = function() {
  window.roles = localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : window.roles;
  window.accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : window.accounts;
  window.products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : window.products;
  window.addToCarts = localStorage.getItem('addToCarts') ? JSON.parse(localStorage.getItem('addToCarts')) : window.addToCarts;
  window.bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : window.bills;
  window.purchasedProducts = localStorage.getItem('purchasedProducts') ? JSON.parse(localStorage.getItem('purchasedProducts')) : window.purchasedProducts;
};



