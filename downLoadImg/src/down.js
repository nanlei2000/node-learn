const request = require('request')
const fs = require('fs')
const resolve = require('path').resolve

const url = 'http://wx2.sinaimg.cn/large/005DwD2Sly1fxjjppvc2ej31400qo106.jpg'

const urlDest = resolve(__dirname, '../pic/' + url.split('/').pop())

request(url).pipe(fs.createWriteStream(urlDest))
