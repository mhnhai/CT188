import { handleActiveTabs, showContent } from '../JavaScripts/AdminEventHandle.js';

    // importDataToLocalStorage();
document.getElementById("customers-quantity").innerHTML = getAllCustomers().length;
document.getElementById("products-quantity").innerHTML = products.length;
document.getElementById("purchased-quantity").innerHTML = calculateTotalPurchasedQuantity();
document.getElementById("revenue-value").innerHTML = calculateRevenue();
document.addEventListener('DOMContentLoaded', function() {
    handleActiveTabs();
});

