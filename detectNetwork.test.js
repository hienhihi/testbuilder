/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(9) === true) {
      throw new Error('9 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011284615047295').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011284615047295856').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6586284615047295').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6528461865047295856').should.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
   (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      var card = prefix.toString() + "7362059271659";
      detectNetwork(card).should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      var card = prefix.toString() + "7362057599271659";
    detectNetwork(card).should.equal('Discover');
  });
    })(prefix)
};

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var card = '6846297480098648';
  for (var len = 12; len <=19; len++) {
    (function(len) {
      it('has a prefix of 5018 and a length of ' + len , function() {
      var car = '5018' + card;
      var nCard = car.substring(0, len);
      detectNetwork(nCard).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + len , function() {
      var car = '5020' + card;
      var nCard = car.substring(0, len);
      detectNetwork(nCard).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + len , function() {
      var car = '5038' + card;
      var nCard = car.substring(0, len);
      detectNetwork(nCard).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + len , function() {
      var car = '6304' + card;
      var nCard = car.substring(0, len);
      detectNetwork(nCard).should.equal('Maestro');
      });
    })(len)
  };
});
describe('China UnionPay', function() {
  for (var china1 = 622126; china1 <= 622925; china1 ++) {
    (function(china1) {
      it('has a prefix of '+china1+' and a length of 16', function() {
      detectNetwork(china1.toString() + "8375038593").should.equal('China UnionPay');
    });
      it('has a prefix of '+china1+' and a length of 17', function() {
      detectNetwork(china1.toString() + "83750385793").should.equal('China UnionPay');
    });
      it('has a prefix of '+china1+' and a length of 18', function() {
      detectNetwork(china1.toString() + "837503859993").should.equal('China UnionPay');
    });
      it('has a prefix of '+china1+' and a length of 19', function() {
      detectNetwork(china1.toString() + "8375038987593").should.equal('China UnionPay');
    });
    })(china1);
  };
  for (var china2 = 624; china2 <627; china2 ++) {
    (function(china2) {
      it('has a prefix of '+china2+' and a length of 16', function() {
      detectNetwork(china2.toString() + "8375038987593").should.equal('China UnionPay');
    });
      it('has a prefix of '+china2+' and a length of 17', function() {
      detectNetwork(china2.toString() + "83750389875593").should.equal('China UnionPay');
    });it('has a prefix of '+china2+' and a length of 18', function() {
      detectNetwork(china2.toString() + "837503898787593").should.equal('China UnionPay');
    });
      it('has a prefix of '+china2+' and a length of 19', function() {
      detectNetwork(china2.toString() + "8375038987593099").should.equal('China UnionPay');
    });
    })(china2);
  };
  for (var china3 = 6282; china3 < 6289; china3 ++) {
    (function(china3) {
      it('has a prefix of '+china3+' and a length of 16', function() {
      detectNetwork(china3.toString() + "837503898793").should.equal('China UnionPay');
    });
      it('has a prefix of '+china3+' and a length of 17', function() {
      detectNetwork(china3.toString() + "8375038989793").should.equal('China UnionPay');
    });
      it('has a prefix of '+china3+' and a length of 18', function() {
      detectNetwork(china3.toString() + "83750398898793").should.equal('China UnionPay');
    });
      it('has a prefix of '+china3+' and a length of 19', function() {
      detectNetwork(china3.toString() + "837503898753099").should.equal('China UnionPay');
    });
    })(china3);
  };
});
describe('Switch', function() {
  var swit = ['4903', '4905', '4911', '4936', '6333', '6759'];
  for (var s = 0; s < swit.length; s ++) {
    (function(s) {
      it('has a prefix of '+swit[s]+' and a length of 16', function() {
      detectNetwork(swit[s] + "837503898793").should.equal('Switch');
    });
      it('has a prefix of '+swit[s]+' and a length of 18', function() {
      detectNetwork(swit[s] + "83750398898793").should.equal('Switch');
    });
    it('has a prefix of '+swit[s]+' and a length of 19', function() {
      detectNetwork(swit[s] + "837503898753099").should.equal('Switch');
    });
    })(s);
  };
  it('has a prefix of 564182 and a length of 16', function() {
      detectNetwork('5641828907563849').should.equal('Switch');
    });
      it('has a prefix of 564182 and a length of 18', function() {
      detectNetwork("564182890977563849").should.equal('Switch');
    });
    it('has a prefix of 564182 and a length of 19', function() {
      detectNetwork("5641829899607563849").should.equal('Switch');
    });
    it('has a prefix of 633110 and a length of 16', function() {
      detectNetwork("6331109573850987").should.equal('Switch');
    });
      it('has a prefix of 633110 and a length of 18', function() {
      detectNetwork("633110957673850987").should.equal('Switch');
    });
    it('has a prefix of 633110 and a length of 19', function() {
      detectNetwork("6331109566773850987").should.equal('Switch');
    });
});
});







