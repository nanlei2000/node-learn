const rmrf = require('rimraf')
rmrf('./tmp', function(err) {
  if (err) console.error(err)
  else console.log('pow!')
})
