
window.roles = [
  {"id": 1, "name": "Admin"},
  {"id": 2, "name": "Customers"}
];

window.accounts = [
  {"id": 1,"userIdentify": "adminb2113322","password": "Toi@1234","userName": "Nguyễn Tới","roleID": 1},
  {"id": 2,"userIdentify": "toib2113322","password": "Toi@1234","userName": "Nguyễn Tới","roleID": 2},
  {"id": 3,"userIdentify": "toic2113322","password": "Toi@1234","userName": "Nguyễn Tới","roleID": 2}
];

window.products = [
  {"id": 1,"productName": "pant1","image": "../images/pants/pants1.jpg","price": 223000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]},
  {"id": 2,"productName": "pant2","image": "../images/pants/pants2.jpg","price": 356000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]},
  {"id": 3,"productName": "pant3","image": "../images/pants/pants3.jpg","price": 356000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]},
  {"id": 4,"productName": "pant4","image": "../images/pants/pants4.jpg","price": 356000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]},
  {"id": 5,"productName": "pant5","image": "../images/pants/pants5.jpg","price": 356000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]},
  {"id": 6,"productName": "pant6","image": "../images/pants/pants6.jpg","price": 356000,"category": "Quần", "amount": 10,"sizes": ["S","M","L","XL"]}
];

window.addToCarts = [
  {"userIdentify": "toib2113322","productID": 1,"amount": 1},
  {"userIdentify": "toib2113322","productID": 2,"amount": 2},
  {"userIdentify": "toib2113322","productID": 3,"amount": 1},
  {"userIdentify": "toib2113322","productID": 4,"amount": 3},
  {"userIdentify": "toic2113322","productID": 4,"amount": 3}
];

window.bills = [
  {"id": 1,"userIdentify": "toib2113322"},
  {"id": 2,"userIdentify": "toib2113322"}
];

window.purchasedProducts = [
  {"billID": 1,"productID": 1,"amount": 1},
  {"billID": 2,"productID": 2,"amount": 1}
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