// node 1 -v
let versionArr = ['-v', '--version']
if (versionArr.includes(process.argv[2])) {
  console.log('1.0.0')
}

/**
 * Command [-option] [argument]
 * 命令 [选项(预定义) ] [用户自己输入]
 */

//  NODE_ENV=test node 1.js
// console.log(process.env.NODE_ENV)

// let i = 0
// setInterval(() => {
//   i++
//   process.stdout.write(i.toString())
//   i > 10 && process.exit()
// }, 1000)
const fs = require('fs')
process.stdin.on('data', data => {
  fs.mkdirSync(data.toString())
  process.exit()
})
