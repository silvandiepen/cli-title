import { logTitle } from "./utils";
import { Color } from "kleur";


logTitle('abcdefg');
console.log()
logTitle('ABCDEFG');

console.log('-----')

logTitle('hijklmn')

console.log()
logTitle('HIJKLMN')


logTitle('GITSAGE')
logTitle('ABCDEFGHIJKLMN')
logTitle('OPQRSTUVWXYZ')
logTitle('abcdefghijklmnopqrstuvwxyz')

logTitle('0123456789')

logTitle('ABC',{
  font: 'pixel',
  color: 'blue'
})
logTitle('?!#/\\|+=_-<>:;,.',{
  font: 'pixel',
  color: 'green'
})
logTitle('?!#/\\|+=_-<>:;,.',{
  color: 'green'
})
logTitle('----------------',{
  color: 'blue'
})
logTitle('_________',{
  color: 'yellow'
})

logTitle('_______________',{
  color: 'yellow',
  space: ''
})

logTitle('1234567890',{
  font: 'digital'
})

logTitle('abcdefghij',{
  font: 'digital'
})

// console.log('-----')

// logTitle('opqrst')
// logTitle('OPQRST')

// console.log('-----')


// logTitle('uvwxyz')
// logTitle('UVWXYZ')
