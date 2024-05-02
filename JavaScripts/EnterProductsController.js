window.addProduct = function(frm) {
  loadDataFromLocalStorage();
  // const newProductId = window.products.length > 0 ? window.products[window.products.length - 1].id + 1 : 1;
  const newProductId = window.products.length +1;
  var obj = {"id":newProductId, "productName":frm.name.value, "image":frm.image.result,"price":frm.price.value,"category":frm.category.value,"amount":frm.quantity.value,"sizes":["S","M","L","XL"] }
  window.products.push(obj);
  importDataToLocalStorage();
};