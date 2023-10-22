// const calc = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
//   })();

function calculator() {
        const add = (a, b) => a + b;
        const sub = (a, b) => a - b;
        const mul = (a, b) => a * b;
        const div = (a, b) => a / b;
        return { add, sub, mul, div };
      };

const calc = calculator();
      
  console.log(calc.add(3,5)); // 8
  calc.sub(6,2); // 4
  calc.mul(14,5534); // 77476
