const request = require('request')
const url =
  'https://weibo.com/p/1005055164717854/photos?from=page_100505&mod=TAB#place'
request(url, (err, res, body) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(res, body)
})
