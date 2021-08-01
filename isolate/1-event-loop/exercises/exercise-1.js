import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

// fill in the blanks

let x = '';

x += 'j'; // 1

const callback1 = () => {
  x += 'ri';
  log('cb 1:', x);
};
setTimeout(callback1, 2000); // queue -> 2
x += 'av'; // 2

const callback2 = () => {
  const test = x === 'javascript';
  log('cb 2:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, 4000); // shoudl be the last one becuase it is test

const callback3 = () => {
  x += 'sc';
  log('cb 3:', x);
};
setTimeout(callback3, 1000); // queue -> 1

const callback4 = () => {
  x += 'pt';
  log('cb 4:', x);
};
setTimeout(callback4, 3000); // queue -> 3

x += 'a'; // 3

log(x); // console.log 'javascript'

log('= = = =  the call stack is empty  = = = =');
