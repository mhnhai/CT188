window.addProduct = function(product) {
  loadDataFromLocalStorage();
  const newProductId = window.products.length > 0 ? window.products[window.products.length - 1].id + 1 : 1;
  product.id = newProductId;
  window.products.push(product);
  importDataToLocalStorage();
};