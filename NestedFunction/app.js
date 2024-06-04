var parentFunc = function (num) {
    var childFirstFunc = function () {
        num += 1;
    };
    var childSecondFunc = function () {
        num *= 3;
    };
    childFirstFunc();
    childSecondFunc();
    return num;
};
console.log(parentFunc(4));
