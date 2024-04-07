import {importDataToLocalStorage, loadDataFromLocalStorage} from "./Main";

// Thêm hàng vào giỏ hàng || Cập nhật số lượng
function addToCart(userIdentify, productID, amount) {
    loadDataFromLocalStorage();
    const product = products.find(product => product.id === productID);
    if (!product) {
        throw new Error('Product not found');
    }
    const existingItemIndex = addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);

    if (existingItemIndex !== -1) {
        addToCarts[existingItemIndex].amount += amount;
    } else {
        addToCarts.push({ userIdentify, productID, amount });
    }
    importDataToLocalStorage();
}

// Xóa hàng khỏi giỏ hàng
function removeFromCart(userIdentify, productID) {
    loadDataFromLocalStorage();
    const indexToRemove = addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);
    if (indexToRemove !== -1) {
        addToCarts.splice(indexToRemove, 1);
    } else {
        throw new Error('Product not found in the cart');
    }
    importDataToLocalStorage();
}

// Lấy hàng từ giỏ hàng
function getItemFromCart(userIdentify, productID) {
    loadDataFromLocalStorage();
    const cartItem = addToCarts.find(item => item.userIdentify === userIdentify && item.productID === productID);

    if (cartItem) {
        const product = products.find(product => product.id === cartItem.productID);

        if (product) {
            return {
                productID: cartItem.productID,
                productName: product.productName,
                amount: cartItem.amount,
                price: product.price,
                totalPrice: product.price * cartItem.amount
            };
        } else {
            return {
                productID: cartItem.productID,
                amount: cartItem.amount,
                errorMessage: 'Product not found'
            };
        }
    } else {
        return null;
    }
}

// Xem thông tin
function viewItemDetail(productID) {
    loadDataFromLocalStorage();
    const product = products.find(product => product.id === productID);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

// Mua hàng
function generateBill(userIdentify, itemsToPurchase) {
    loadDataFromLocalStorage();
    if (addToCarts.filter(item => item.userIdentify === userIdentify).length === 0) {
        throw new Error('Cart is empty');
    }

    const newBillId = bills.length + 1;
    const newBill = { id: newBillId, userIdentify };
    bills.push(newBill);

    itemsToPurchase.forEach(item => {
        const cartItem = addToCarts.find(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
        const amountToPurchase = Math.min(cartItem.amount, item.amount);
        if (!cartItem) {
            throw new Error(`Product with ID ${item.productID} not found in the cart`);
        }
        purchasedProducts.push({ billID: newBillId, productID: item.productID, amount: amountToPurchase});
        const productIndex = products.findIndex(product => product.id === item.productID);
            if (productIndex !== -1) {
                products[productIndex].amount -= amountToPurchase;
            }
    });

    itemsToPurchase.forEach(item => {
        const cartItemIndex = addToCarts.findIndex(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
        if (cartItemIndex !== -1) {
            addToCarts[cartItemIndex].amount -= Math.min(addToCarts[cartItemIndex].amount, item.amount);
            if (addToCarts[cartItemIndex].amount === 0) {
                addToCarts.splice(cartItemIndex, 1);
            }
        }
    });
    importDataToLocalStorage();
    return newBill;
}

// Ví dụ dữ liệu đầu vào
const userIdentify = "user1";
const itemsToPurchase = [
    { productID: 1, amount: 2 },
    { productID: 2, amount: 1 } 
];


exports = {
    addToCart,
    removeFromCart,
    getItemFromCart,
    viewItemDetail,
    generateBill
};