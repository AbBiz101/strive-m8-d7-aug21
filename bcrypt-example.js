import bcrypt from "bcrypt"

const plainPW = "abc"

const numberOfRounds = 20 // The algorithm will be executed 2^10 = 1024 times

console.log("Number of Rounds: ", numberOfRounds)
console.time("hashing")
const hash = bcrypt.hashSync(plainPW, numberOfRounds)
console.timeEnd("hashing")

console.log("HASH: ", hash)
const isOK = bcrypt.compareSync("abc", "$2b$11$MEaSo7rvkoOguF3TfOq.u.oOFtzOiBLJBo1Bdjw.7pKh0LTl6nAba") // hash("MEaSo7rvkoOguF3TfOq.u.oO" + "abc") --> compare two hashes --> yes or no

console.log("Do they match? ", isOK)
