var anonymousFunc = function (numbers) {
    var newNum = numbers.map(function (number) { return number * 2; });
    return newNum;
};
console.log(anonymousFunc([1, 2, 3]));
