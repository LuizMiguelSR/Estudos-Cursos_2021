const fruta = 'banana';

switch (fruta) {
    case 'banana' :
    console.log ('R$: 3,00 /Kg');
    break; // pausar
    case 'mamao':
    case 'pera':
    console.log ('R$: 2,00 /Kg');
    break;
    default:
    console.log ('Produto n�o existe no estoque');
    break;
}