export var roles = [
    {"id": 1, "name": "Admin"},
    {"id": 2, "name": "user"}
  ],
  
  accounts = [
    {"id": 1,"userIdentify": "Admin1","password": "12345678","userName": "Nguyen Toi","roleID": 1},
    {"id": 2,"userIdentify": "user1","password": "12345678","userName": "Nguyen Toi","roleID": 2},
    {"id": 3,"userIdentify": "user2","password": "12345678","userName": "Nguyen Toi","roleID": 2}
  ],
  
  productTypes = [{"id": 1,"typeName": "Áo"},{"id": 2,"typeName": "Quần"},
  {"id": 3,"typeName": "Áo khoác"},{"id": 4,"typeName": "Giày"}
  ],
  
  brands =[
    {"id": 1,"brandName": "YaMe"},
    {"id": 2,"brandName": "Outerity"},
    {"id": 3,"brandName": "SWE"}
  ],
  
  products = [
    {"id": 1,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 2,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 3,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 4,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 5,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 6,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 7,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 8,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]},
    {"id": 9,"productName": "","image": "url","price": 0,"typeID": 1,"brandID": 1,"sizes": ["S","M","L","XL"]}
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