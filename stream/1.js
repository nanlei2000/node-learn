const file = require('fs').createWriteStream('./big.file')

for (let i = 0; i <= 1e6; i++) {
  file.write(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque, veniam quis aliquam, iste laudantium delectus error nobis tempora aut laborum. Commodi cupiditate veniam repudiandae, modi temporibus iure voluptas doloremque./n'
  )
}

file.end()
