const multiplier = (x: number) => {
  return (y: number) => {
    return x * y
  }
}
const triple = multiplier(3)
console.log(triple(5));
