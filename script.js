/* eslint-disable camelcase */
var myField = [];
var lastNumber;
var numbers = document.getElementById('numbers_EuroLotto');

// config for EuroLotto
var euroLottoMin = 1;
var euroLottoMax = 50;
var euroLottoCount = 5;
var euroLottoAdditionalsMin = 1;
var euroLottoAdditionalsMax = 10;
var euroLottoAdditionalsCount = 2;

// config for sixOf49
// var sixOf49LottoMin = 1;
// var sixOf49LottoMax = 49;
// var sixOf49LottoCount = 6;
// var sixOf49LottoAdditionalsMin = 1;
// var sixOf49LottoAdditionalsMax = 10;
// var sixOf49LottoAdditionalsCount = 2;

// ??
function createNumber(maxRange) {
    var number = Math.ceil(Math.random() * maxRange);
    console.log(number);
    return number;
}

function checkIfNumberAlreadyExists(numberToCheck) {
    if (myField.includes(numberToCheck)) {
        console.log('Number already taken');
        return true;
    }
    lastNumber = numberToCheck;
    return false;
}

function reset() {
    myField = [];
    lastNumber = null;
}

function createField(amount, maxRange) {
    for (let i = 0; i < amount; i++) {
        if (checkIfNumberAlreadyExists(createNumber(maxRange))) {
            reset();
            i = 0;
            createField(amount, maxRange);
        } else {
            myField[i] = lastNumber;
        }
    }
    return myField;
}

// Create button for generating random numbers
var btn_generateRandomNumbersEuroLotto = document.getElementById('btn_generateRandomNumbersEuroLotto');
btn_generateRandomNumbersEuroLotto.addEventListener('click', function() {
    myField = createField(euroLottoCount, euroLottoMax);
    var ret = myField.sort(function(a, b) {
        return a - b;
    });
    numbers.textContent = ret.toString();
    reset();
    var myAdditionals = createField(euroLottoAdditionalsCount, euroLottoAdditionalsMax);
    var ret2 = myAdditionals.sort(function(a, b) {
        return a - b;
    });
    numbers.append(` | ${ret2}`);
});

// Create button for generating additional numbers (Zusatzzahlen)
var btn_generateRandomNumbersSixOf49 = document.getElementById('btn_generateRandomNumbersSixOf49');
btn_generateRandomNumbersSixOf49.addEventListener('click', function() {
    alert('TEST');
});
