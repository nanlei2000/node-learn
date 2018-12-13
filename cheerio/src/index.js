const request = require('request')
const cheerio = require('cheerio')
const l = console.log
const fs = require('fs')
const url = `https://read.qidian.com/chapter/Y0bKu4VawlxcXB4XKBaZpQ2/eSlFKP1Chzg1`
let str = ''
request(url, (err, data) => {
  const $ = cheerio.load(data.body)
  let title = $('title')
  let content = $('.read-content')
  str += title[0].children[0].data + `\n`
  content.find('p').each((index, item) => {
    str += item.children[0].data + `\n`
  })
  const _data = Buffer.from(str)
  fs.writeFile('文件.txt', _data, err => {
    if (err) throw err
    console.log('文件已保存')
  })
})
