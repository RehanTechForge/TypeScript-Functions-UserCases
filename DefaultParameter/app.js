function greet(name, message) {
    if (message === void 0) { message = "Hello"; }
    return "".concat(message, ", ").concat(name, "!");
}
console.log(greet("rehan"));
console.log(greet("usman", "Hi"));
