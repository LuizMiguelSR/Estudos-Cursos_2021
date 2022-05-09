let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return está implicito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Ola';
}

ola = () => 'Ola';
ola = _ => 'Ola'; // possui um parâmetro
console.log(ola());