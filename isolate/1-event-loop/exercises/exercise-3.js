import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
  x += 'a';
  log('cb 1:', x);
};
const intervalId = setInterval(exercise3_cb_1, 3000); // tercero, but interval 'a' until it stop in some point 

const exercise3_cb_2 = () => {
  x += 'w';
  log('cb 2:', x);
};
setTimeout(exercise3_cb_2, 1000); // primero 

const exercise3_cb_3 = () => {
  const test = x === 'whaaaa!';
  log('cb 3:', test);
  console.assert(test, 'x should be "whaaaa!');
};
setTimeout(exercise3_cb_3, 13000);

const exercise3_cb_4 = () => {
  clearInterval(intervalId); // clear intervals when it gets 4 times 'a'
  x += '!';
  log('cb 4:', x);
};
setTimeout(exercise3_cb_4, 12000);

const exercise3_cb_5 = () => { // segundo 
  x += 'h';
  log('cb 5:', x);
};
setTimeout(exercise3_cb_5, 2000);

log(x);

log('= = = =  the call stack is empty  = = = =');
