const simulateDelay = (callback: Function) => {
  setTimeout(callback, 2000)
}
simulateDelay(() => console.log("Data Received"));