// function calc() {
//     const sum = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     return {sum, sub}
// }

function calc() {
    return {
        ping( a, b ) {return [ a, b ]},
        sum( a, b ) { return a + b },
        sub( a, b ) { return a - b }
    }
}

const add = calc();
console.log( add.ping(2, 3) );
console.log( add.sum(2, 3) );
console.log( add.sub(2, 3) );
