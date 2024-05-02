window.addProduct = function(frm) {
  loadDataFromLocalStorage();
  // const newProductId = window.products.length > 0 ? window.products[window.products.length - 1].id + 1 : 1;
  const newProductId = window.products.length +1;
  var src = "../images/products/" + getFile(frm.image.value);

  var obj = {"id":newProductId, "productName":frm.name.value, "image": src,"price":frm.price.value,"category":frm.category.value,"amount":frm.quantity.value,"sizes":["S","M","L","XL"] }
  window.products.push(obj);
  importDataToLocalStorage();
};

function getFile(filePath) {
        
  /*Chỉ lấy tên
  return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
  */
  //lấy tên và phần mở rộng
  return filePath.substr(filePath.lastIndexOf('\\') + 1);
}