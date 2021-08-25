//memory choose function
function memory(num) {
    //for 8gb memory
    if (num == 8) {
        document.getElementById('extra-memory').innerText = 0;
    }
    //for 16gb memory
    else if (num == 16) {
        document.getElementById('extra-memory').innerText = 180;
    }
}

//storage choose function
function storage(num) {
    //for 256gb storage
    if (num == 256) {
        document.getElementById('extra-storage').innerText = 0;
    }
    //for 512gb storage
    else if (num == 512) {
        document.getElementById('extra-storage').innerText = '100';
    }
    //for 1TB  storage
    else if (num == 1) {
        document.getElementById('extra-storage').innerText = 180;
    }
}


//delivery charge choose function
function delivery(num) {
    if (num == 1) {
        document.getElementById('delivery-charge').innerText = 0;
    }
    else if (num == 2) {
        document.getElementById('delivery-charge').innerText = 20;
    }
}


//total calculation function
function total() {
    const phone = document.getElementById('best-price').innerText;
    const memory = document.getElementById('extra-memory').innerText;
    const storage = document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

    //calculate total price
    const total = parseInt(phone) + parseInt(memory) + parseInt(storage) + parseInt(deliveryCharge);
    //set total price
    document.getElementById('total-price').innerText = total;
    //set grand total price
    document.getElementById('grand-total').innerText = total;
}

//promo code function
function promoCode(inputCode) {
    const realPromo = 'stevekaku';
    if (inputCode == realPromo) {
        const total = document.getElementById('total-price').innerText;
        let calculation = parseFloat(total * .2);
        const finalPrice = total - calculation;
        document.getElementById('grand-total').innerText = finalPrice;
    }
}


//handle 8gb memory button event
document.getElementById('8gb-memory').addEventListener('click', function () {
    memory(8);
    total();
});


//handle 16gb memory button event
document.getElementById('16gb-memory').addEventListener('click', function () {
    memory(16);
    total();
});


//handle 256gb storage button event
document.getElementById('256gb-storage').addEventListener('click', function () {
    storage(256);
    total();
});


//handle 512gb storage button event
document.getElementById('512gb-storage').addEventListener('click', function () {
    storage(512);
    total();
});


//handle 1TB storage button event
document.getElementById('1tb-storage').addEventListener('click', function () {
    storage(1);
    total();
});


//handle free delivery button event
document.getElementById('free-delivery').addEventListener('click', function () {
    delivery(1);
    total();
});


//handle charged delivery button event
document.getElementById('charged-delivery').addEventListener('click', function () {
    delivery(2);
    total();
});


//handle promo code button event
document.getElementById('promo-btn').addEventListener('click', function () {
    const inputPromo = document.getElementById('promo-code').value;
    promoCode(inputPromo);

    //clear input field
    document.getElementById('promo-code').value = '';
});