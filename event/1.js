/**
 *  events是nodeJS的很多模块的基类,在bom环境下有个类似的基类 EventTarget
 *  是基于观察者模式（Observer Pattern）的封装,
 *  优点：观察者和被观察者是抽象耦合的
 * */

const EventEmitter = require('events')

class Person extends EventEmitter {
  constructor(year) {
    super()
    this.year = year
  }

  growUp() {
    setInterval(() => {
      this.year++
      this.emit('growUp', this.year)
    }, 1000)
  }
}

let nl = new Person(0)

nl.growUp()
nl.on('growUp', data => {
  console.log(`他现在是${data}岁`)
})
