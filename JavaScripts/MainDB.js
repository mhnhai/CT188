let roles = [
  {"id": 1, "name": "Admin"},
  {"id": 2, "name": "user"}
];

let accounts = [
  {"id": 1,"userIdentify": "Admin1","password": "12345678","userName": "Nguyen Toi","roleID": 1},
  {"id": 2,"userIdentify": "user1","password": "12345678","userName": "Nguyen Toi","roleID": 2},
  {"id": 3,"userIdentify": "user2","password": "12345678","userName": "Nguyen Toi","roleID": 2}
];

let products = [
  {"id": 1,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 2,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 3,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 4,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 5,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 6,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 7,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 8,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]},
  {"id": 9,"productName": "","image": "url","price": 0,"category": "Ao", "amount": 0,"sizes": ["S","M","L","XL"]}
];

let addToCarts = [
  {"userIdentify": "user1","productID": 1,"amount": 1},
  {"userIdentify": "user1","productID": 2,"amount": 1}
];

let bills = [
  {"id": 1,"userIdentify": "user1"},
  {"id": 2,"userIdentify": "user1"}
];

let purchasedProducts = [
  {"billID": 1,"productID": 1,"amount": 1},
  {"billID": 1,"productID": 2,"amount": 1}
];

function importDataToLocalStorage() {
  localStorage.setItem('roles', JSON.stringify(roles));
  localStorage.setItem('accounts', JSON.stringify(accounts));
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('addToCarts', JSON.stringify(addToCarts));
  localStorage.setItem('bills', JSON.stringify(bills));
  localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
}

function loadDataFromLocalStorage() {
  roles = localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : roles;
  accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : accounts;
  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : products;
  addToCarts = localStorage.getItem('addToCarts') ? JSON.parse(localStorage.getItem('addToCarts')) : addToCarts;
  bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : bills;
  purchasedProducts = localStorage.getItem('purchasedProducts') ? JSON.parse(localStorage.getItem('purchasedProducts')) : purchasedProducts;
}

function addRole(id, name) {
  roles.push({"id": id, "name": name});
}

export { roles, accounts, products, addToCarts, bills, purchasedProducts, importDataToLocalStorage, loadDataFromLocalStorage, addRole};
