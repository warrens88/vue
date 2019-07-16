import { add, var1 } from './utils/utility1';

console.log(add(4,5));
console.log(var1);


import { add2, var2 as v } from './utils/utility1';

console.log(add2(4,5));
console.log(v);


import calc from './utils/utility1';

console.log(calc.add(4,5));
console.log(calc.multiply(4,5));