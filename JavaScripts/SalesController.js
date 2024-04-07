import {importDataToLocalStorage, loadDataFromLocalStorage} from "./Main";

function getBills() {
    loadDataFromLocalStorage();
    return bills;
}

function getBill(billID) {
    loadDataFromLocalStorage();
    return bills.find(bill => bill.id === billID);
}

function getPurchasedProducts(billID) {
    loadDataFromLocalStorage();
    return purchasedProducts.filter(product => product.billID === billID);
}

exports = {
    getBills,
    getBill,
    getPurchasedProducts
};