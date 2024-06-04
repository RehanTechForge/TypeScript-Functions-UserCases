function greet(name: string, message: string = "Hello") {
  return `${message}, ${name}!`
}
console.log(greet("rehan"));
console.log(greet("usman", "Hi"));

