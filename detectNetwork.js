// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var begin = cardNumber.substr(0,2);
  var notaCard = "Sorry, invalid input";
  var digits = cardNumber.length;
  var prefix4 = cardNumber.substr(0, 4);
  var prefix3 = cardNumber.substr(0, 3);
  var maestroDi = [12, 13, 14, 15, 16, 17, 18, 19];
  var prefix6 = cardNumber.substr(0, 6);

  if (isNaN(cardNumber)) {
    return notaCard;
  } else if ( typeof(cardNumber) != "string") {
    return notaCard;
  }
   // Switch Bank should be tested first because more case will fall into the visa category bc it's easier to match "4"
    if (prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix4 === '6333' || prefix4 === '6759') {
      if (digits === 16 || digits === 18 || digits === 19) {
        return "Switch"
      }
    } else if (prefix6 === '564182' || prefix6 === '633110') {
      if (digits === 16 || digits === 18 || digits === 19) {
        return "Switch"
      }
    };
  //Discover

  if (begin === '65' || prefix4 === '6011') {
    if (digits === 16 || digits == 19) {
     return 'Discover';
    }
  };
 if (prefix3 === '644' || prefix3 === '645' || prefix3 === '646' || prefix3 === '647' || prefix3 === '648' || prefix3 === '649') {
    if (digits === 16 || digits === 19) {
      return "Discover";
      }
    };

 // Diner's CLub, Amex, Visa, Mastercard
  if (begin === '38' || begin === '39') {
	  if (digits === 14) {
		 return "Diner's Club";
		 }
	} else if (begin === '34' || begin === '37') {
		if (digits === 15) {
			return "American Express";
		}
	} else if (cardNumber[0] === '4') {
		if (digits === 19 || digits === 16 || digits === 13) {
			return "Visa";
		}
	} else if (begin === '55' || begin === '54' || begin === '53' || begin === '52' || begin === '51') {
		if (digits === 16) {
			return 'MasterCard';
		}
  };
  //Maestro
  if (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304'){
    if (maestroDi.includes(digits)) {
        return "Maestro"
      }
  }
    //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
for (var c = 622126; c <= 622925; c ++) {
  if (prefix6 === c.toString()) {
    if (digits === 16 || digits === 17|| digits === 18|| digits === 19) {
      return "China UnionPay";
    }
  }
};
if (prefix3 === '624' || prefix3 === '625' || prefix3 === '626' ){
  if (digits === 16 || digits === 17|| digits === 18|| digits === 19) {
    return "China UnionPay";
  }
} else if (prefix4 === '6282' || prefix4 === '6283' || prefix4 === '6284' || prefix4 === '6285' || prefix4 === '6286' || prefix4 === '6287' || prefix4 === '6288'){
  if (digits === 16 || digits === 17|| digits === 18|| digits === 19) {
    return "China UnionPay";
  }
};

};


