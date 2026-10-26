//importing default export using object and properties
import calculator from './my-modules.js';

//importing only one or more exported this using named exports
import { minus } from './my-modules.js';

const summa = calculator.plus(1, 2);
console.log('SUMMA:', summa);

const erotus = minus(1, 2);
console.log('EROTUS:', erotus);
