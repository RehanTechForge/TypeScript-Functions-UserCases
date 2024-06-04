var sumAll = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    numbers.map(function (number) { return sum += number; });
    return sum;
};
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40, 50));
