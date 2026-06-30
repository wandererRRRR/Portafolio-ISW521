function Sumar(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}   
console.log(Sumar(1, 2, 3, 4, 5)); // Output: 15
console.log(Sumar(10, 20, 30)); // Output: 60