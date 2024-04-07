feather.replace()

var newArrivalProducts = [
    {
        name: "pant1",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants1.jpg"
    },
    {
        name: "pant2",
        price: 356000,
        discount: 0.3,
        imageUrl: "images/pants/pants2.jpg"
    },
    {
        name: "pant3",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants3.jpg"
    },
    {
        name: "pant4",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants4.jpg"
    },
    {
        name: "pant5",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants5.jpg"
    },
    {
        name: "pant6",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants6.jpg"
    }
]

var bestSellerProducts = [
    {
        name: "pant1",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants1.jpg"
    },
    {
        name: "pant2",
        price: 356000,
        discount: 0.3,
        imageUrl: "images/pants/pants2.jpg"
    },
    {
        name: "pant3",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants3.jpg"
    },
    {
        name: "pant4",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants4.jpg"
    },
    {
        name: "pant5",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants5.jpg"
    },
    {
        name: "pant6",
        price: 223000,
        discount: 0.3,
        imageUrl: "images/pants/pants6.jpg"
    }
]

// product
var autoPlayingDuration = 3000;

// new arrival (na)
var naShowingCount = 4;
var naCount = newArrivalProducts.length;
var naProductNeedToBeShowed = naCount - naShowingCount;
var naInstance = document.querySelector('#new-arrival-container');
var naWidth = naInstance.scrollWidth;

var naItemInstance = document.querySelector('#new-arrival-container .product');
var naItemWidth = naItemInstance.clientWidth;

var naMaxScroll = (naCount - naShowingCount) * naItemWidth;
var naCurrentScroll = 0;

var naScrollIntervalFunction = function () {
    if(naCurrentScroll + naItemWidth <= naMaxScroll)
    {
        naCurrentScroll += naItemWidth;
    } else {
        naCurrentScroll = 0;
    }

    naInstance.scroll({
        left: naCurrentScroll,
        behavior: "smooth"
    });
};

var naScrollIntervalId = window.setInterval(naScrollIntervalFunction, autoPlayingDuration);

naInstance.addEventListener('mouseover', function () {
    window.clearInterval(naScrollIntervalId);
});

naInstance.addEventListener('mouseout', function () {
    naScrollIntervalId = window.setInterval(naScrollIntervalFunction, autoPlayingDuration);
});

naInstance.addEventListener('scrollend', function () {
    naCurrentScroll = Math.round(naInstance.scrollLeft / naItemWidth) * naItemWidth;
});
// end of new arrival

// best seller (bs)
var bsShowingCount = 4;
var bsCount = bestSellerProducts.length;
var bsProductNeedToBeShowed = bsCount - bsShowingCount;
var bsInstance = document.querySelector('#best-seller-container');
var bsWidth = bsInstance.scrollWidth;

var bsItemInstance = document.querySelector('#best-seller-container .product');
var bsItemWidth = bsItemInstance.clientWidth;

var bsMaxScroll = (bsCount - bsShowingCount) * bsItemWidth;
var bsCurrentScroll = 0;

var bsScrollIntervalFunction = function () {
    if(bsCurrentScroll + bsItemWidth <= bsMaxScroll)
    {
        bsCurrentScroll += bsItemWidth;
    } else {
        bsCurrentScroll = 0;
    }

    bsInstance.scroll({
        left: bsCurrentScroll,
        behavior: "smooth"
    });
};

var bsScrollIntervalId = window.setInterval(bsScrollIntervalFunction, autoPlayingDuration);

bsInstance.addEventListener('mouseover', function () {
    window.clearInterval(bsScrollIntervalId);
});

bsInstance.addEventListener('mouseout', function () {
    bsScrollIntervalId = window.setInterval(bsScrollIntervalFunction, autoPlayingDuration);
});

bsInstance.addEventListener('scrollend', function () {
    bsCurrentScroll = Math.round(bsInstance.scrollLeft / bsItemWidth) * bsItemWidth;
});
// end of best seller