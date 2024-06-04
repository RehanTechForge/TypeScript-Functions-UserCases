var multiplier = function (x) {
    return function (y) {
        return x * y;
    };
};
var triple = multiplier(3);
console.log(triple(5));
