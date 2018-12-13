process.stdin.on('data', data => {
  let str = data.toString()
  str = str.replace('吗?', '!')
  str = str.replace('吗？', '！')
  process.stdout.write(str)
})
