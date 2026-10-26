// NÄMÄ LÖYTYY OPETTAJAN ESIMERKEISTÄ

const plus = (num1, num2) => {
  return num1 + num2;
};

kerto(1, 2);

const minus = function (num1, num2) {
  return num1 - num2;
};

minus(1, 2);

function kerto(num1, num2) {
  return num1 * num2;
}

const pii = 3.14;

// Käytä aina const/let, älä ikinä var.
// ehdoton no-no: var muuttuja = 'joku arvo';

//Default export
const calculator = { plus, minus, kerto };
export default calculator;

//Named export
export { plus, minus, kerto, pii };
