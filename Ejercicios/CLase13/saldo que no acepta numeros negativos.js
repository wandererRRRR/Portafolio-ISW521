class cuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(nuevoSaldo) {
        this.saldo = nuevoSaldo;
    }    
    if valor < 0 {
        throw new Error("El saldo no puede ser negativo");
    }
}
const cuenta = new cuentaBancaria("Juan", 1000);
cuenta.setSaldo(500);
console.log(cuenta.getSaldo()); // Output: 500