let cadena = prompt("Escriba tres números con el formato número1,número2,número3:");
const numeros = cadena.split(",");
const maximo = Math.max(...numeros);
const minimo = Math.min(...numeros);
let centro;
if (maximo === minimo){
    centro = maximo;
}else{
    for (const num of numeros) {
        (num != maximo && num != minimo) ? centro = num: (num === maximo) ? centro = maximo: centro = minimo;
    }
}
const mayorMenor = [maximo, centro, minimo];
const menorMayor = [minimo, centro, maximo];
alert(`Números ordenados de mayor a menor: ${mayorMenor} \n Números ordenados de menor a mayor: ${menorMayor} \n Maximo: ${maximo}`);

