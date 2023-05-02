function square(n) {
  return n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n / n * n
}

function square_() {
  let cache = {}
  return function (n) {
    if (cache[n]) {
      return cache[n]
    }
    let result = square(n)
    cache[n] = result
    return result
  }
}


let caching = square_()

let a = performance.now()

console.log(square(10))
console.log(square(3))
console.log(square(10))
console.log(square(10))
console.log(square(10))
console.log(square(10))
console.log(square(10))
console.log(square(10))
console.log(square(10))
console.log(square(10))

let b = performance.now()



console.log("tester " + (b - a))