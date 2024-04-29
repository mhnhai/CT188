window.addToCart = function(userIdentify, productID, amount) {
    loadDataFromLocalStorage();
    const product = window.products.find(product => product.id === productID);
    if (!product) {
        throw new Error('Product not found');
    }
    const existingItemIndex = window.addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);

    if (existingItemIndex !== -1) {
        window.addToCarts[existingItemIndex].amount += amount;
    } else {
        window.addToCarts.push({ userIdentify, productID, amount });
    }
    importDataToLocalStorage();
};

window.removeFromCart = function(userIdentify, productID) {
    loadDataFromLocalStorage();
    const indexToRemove = window.addToCarts.findIndex(item => item.userIdentify === userIdentify && item.productID === productID);
    if (indexToRemove !== -1) {
        window.addToCarts.splice(indexToRemove, 1);
    } else {
        throw new Error('Product not found in the cart');
    }
    importDataToLocalStorage();
};

window.getItemFromCart = function(userIdentify, productID) {
    loadDataFromLocalStorage();
    const cartItem = window.addToCarts.find(item => item.userIdentify === userIdentify && item.productID === productID);

    if (cartItem) {
        const product = window.products.find(product => product.id === cartItem.productID);

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
};

window.viewItemDetail = function(productID) {
    loadDataFromLocalStorage();
    const product = window.products.find(product => product.id === productID);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

window.generateBill = function(userIdentify, itemsToPurchase) {
    loadDataFromLocalStorage();
    if (window.addToCarts.filter(item => item.userIdentify === userIdentify).length === 0) {
        throw new Error('Cart is empty');
    }

    const newBillId = window.bills.length + 1;
    const newBill = { id: newBillId, userIdentify };
    window.bills.push(newBill);

    itemsToPurchase.forEach(item => {
        const cartItem = window.addToCarts.find(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
        const amountToPurchase = Math.min(cartItem.amount, item.amount);
        if (!cartItem) {
            throw new Error(`Product with ID ${item.productID} not found in the cart`);
        }
        window.purchasedProducts.push({ billID: newBillId, productID: item.productID, amount: amountToPurchase});
        const productIndex = window.products.findIndex(product => product.id === item.productID);
            if (productIndex !== -1) {
                window.products[productIndex].amount -= amountToPurchase;
            }
    });

    itemsToPurchase.forEach(item => {
        const cartItemIndex = window.addToCarts.findIndex(cartItem => cartItem.userIdentify === userIdentify && cartItem.productID === item.productID);
        if (cartItemIndex !== -1) {
            window.addToCarts[cartItemIndex].amount -= Math.min(window.addToCarts[cartItemIndex].amount, item.amount);
            if (window.addToCarts[cartItemIndex].amount === 0) {
                window.addToCarts.splice(cartItemIndex, 1);
            }
        }
    });
    importDataToLocalStorage();
    return newBill;
};

window.getAllBillsByUserId = function(userIdentify) {
    loadDataFromLocalStorage();
    return window.bills.filter(bill => bill.userIdentify === userIdentify);
};