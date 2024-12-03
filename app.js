
const os = require('os')

// User system Info
const user = os.userInfo()
console.log(user)

// System uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

console.log("Making new changes")