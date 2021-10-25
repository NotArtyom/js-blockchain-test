const SHA256 = require('crypto-js/sha256')

// f(x) <= M
// f - хеш функция SHA-256

let varN = 2
let nonce = 0

while (SHA256(nonce.toString()).toString().substring(0, varN) !== Array(varN + 1).join('0')) {
  nonce++
}

console.log(nonce)
console.log(SHA256('286').toString())

