window.getBills = function () {
    loadDataFromLocalStorage();
    return bills;
}

window.getBill = function (billID) {
    loadDataFromLocalStorage();
    return bills.find(bill => bill.id === billID);
}

window.getPurchasedProducts = function (billID) {
    loadDataFromLocalStorage();
    return purchasedProducts.filter(product => product.billID === billID);
}

window.getBillValue = function (billID) {
    const purchasedProductsInBill = purchasedProducts.filter(purchasedProduct => purchasedProduct.billID === billID);
  
    let totalValue = 0;
    for (const purchasedProduct of purchasedProductsInBill) {
      const product = products.find(product => product.id === purchasedProduct.productID);
      if (product) {
        totalValue += product.price * purchasedProduct.amount;
      }
    }
    
    return totalValue;
}