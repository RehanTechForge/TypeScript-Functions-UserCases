const parentFunc = (num: number) => {
  const childFirstFunc = () => {
    num += 1;
  }
  const childSecondFunc = () => {
    num *= 3
  }
  childFirstFunc()
  childSecondFunc()
  return num;

}
console.log(parentFunc(4));

