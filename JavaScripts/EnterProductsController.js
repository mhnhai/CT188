import {importDataToLocalStorage, loadDataFromLocalStorage, brands, products} from "./MainDB";

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

exports = {
  addProduct,
  addBrand
};