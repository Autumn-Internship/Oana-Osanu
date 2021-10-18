let customerInfo = {
    address: 'Calea X 26',
  };
  
  function processOrder(customerInfo, basket, options) {
    const validateAddress = validateAddress(customerInfo.address); //changed function name from vldAddr to validateAddress
    
    if (validateAddress === false) {
      return;
    }
  
    applyDiscount(basket.totalPrice);
  
    if (options.paymentMethod.cash) {
      pay(customerInfo.creditCard);
    }
    //refactored using template literals
    return `Dear ${customerInfo.name} you order has been placed successfully. Carrier service: ${options.carrier}`;
  }
  
  function pay(cardDetails) {
    //changed function name from validate_card_details to validateCardDetails
    validateCardDetails(cardDetails);
    const status = makePayment();  
    //changed order to return early
    if (status === 'wrong input') { //refactored using strict equality instead of abstract equality
        return false;
    } else if (status === 'network err') {
      throw new Error('some error :(');
    } else if(status === 'ok') {
        return true;
    }
  }
  
  function validateCardDetails(card) {
    if (card.expiryDate > Date.now()) {
      validateName();
      validateCardNumber();
      validateIssuer();
      validateMerchant();
      // some random code, don't mind
      maxLength = Math.max.apply(null, cardType.lengths);  
      //a nested if was here, I moved it below
    } else {
      return false;
    }
    //moved the if here, it was above
    if (card.expiryDate > Date.now() && options.maxLength) {
        maxLength = Math.min(options.maxLength, maxLength);
      }
  }
  
  function validateAddress(address) { //changed function name from vldAddr to validateAddress
    return postalCode || adress.line1;
  }
  
  function applyDiscount(basket) {
    //from 3 nested ifs into 1 using &&
    if (basket.price > 200 && basket.coupons && basket.coupons.tenOff) {
        totalPrice -= 10/100 * totalPrice;
    } else {
      return basket.price;
    }
  }