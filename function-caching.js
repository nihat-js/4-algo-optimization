function square(n){
  return n*n
}

function cachingSquare(){
  let cache = {}
  return function (n){
    for (let n in cache){
      return cache[n]
    }
    let result = square(n)
    cache[n] = result
    return result
  }
}


let caching = cachingSquare()

console.log(caching(10))