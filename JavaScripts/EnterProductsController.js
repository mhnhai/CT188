window.addProduct = function(frm) {
  loadDataFromLocalStorage();
  // const newProductId = window.products.length > 0 ? window.products[window.products.length - 1].id + 1 : 1;
  const newProductId = window.products.length +1;
  var src = "../images/products/" + getFile(frm.image.value);

  var obj = {"id":newProductId, "productName":frm.name.value, "image": src,"price":frm.price.value,"category":frm.category.value,"amount":frm.quantity.value,"sizes":["S","M","L","XL"] }
  window.products.push(obj);
  importDataToLocalStorage();
};

window.editProduct = function(frm) {

  var a = document.getElementById("imgsrc");


  loadDataFromLocalStorage();
  var src = "../images/products/" + getFile(frm.image.value);
  var obj = {"id":parseInt(frm.id.value)+1, "productName":frm.name.value, "image": frm.image.value === "" ? a.src:src,"price":frm.price.value,"category":frm.category.value,"amount":frm.quantity.value,"sizes":["S","M","L","XL"] }
  window.products[frm.id.value] = obj;
  importDataToLocalStorage();
};

function getPd(product){
  console.log(product.id);
}


function getFile(filePath) {
        
  /*Chỉ lấy tên
  return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
  */
  //lấy tên và phần mở rộng
  return filePath.substr(filePath.lastIndexOf('\\') + 1);
}

function changeImg(props){
  var a = document.getElementById("imgsrc");
  var src = "../images/products/" + getFile(props.value);
  a.src = src;
}