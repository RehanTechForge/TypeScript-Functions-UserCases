var simulateDelay = function (callback) {
    setTimeout(callback, 2000);
};
simulateDelay(function () { return console.log("Data Received"); });
