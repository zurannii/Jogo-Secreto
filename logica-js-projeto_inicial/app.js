alert('Boas Vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute 
let tentativas = 1;

while (chute != numeroSecreto) {
   chute  = prompt(`escolha um número entre 1 e ${numeroMaximo}:`);
   if (chute == numeroSecreto) {
    break;
} else {
   if (chute > numeroSecreto) {
    alert(`o numero secreto é menor que ${chute}`);
   } else {
    alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let = palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



