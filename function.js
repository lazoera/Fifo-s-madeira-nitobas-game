//Variables
let ask, randomNumber, option, i = 1;
let Attempts = 'tentativa'

function randomStrings() {
  var r_text = new Array ();
  r_text[0] = "Fifo é tão inútil, que não serve nem para apanhar.";
  r_text[1] = "Quase que Fifo dá a bunda.";
  r_text[2] = "Fifo é tão inútil, que nem para dar a bunda ele levanta.";
  r_text[3] = "Quase que Marcondes enraba Fifo.";
  r_text[4] = "Fifo ficou assado.";
  r_text[5] = "Fifo teve a Metamask hackeada e quase levou madeirada de Marcondes.";
  r_text[6] = "Marcondes contratou mais 2 negão para ajudá-lo na busca pelo Fifo.";
  r_text[7] = "Fifo corre, pois todos querem enrabar Fifo";
  r_text[8] = "É um inútil? É um Judas? É um desgraçado? Não, é o Fifo";
  r_text[9] = "Fifo porquê és tão inútil?";
  var index = Math.floor(10*Math.random())
  alert(r_text[index]);
  }

while (option != 3) {
  option = Number(prompt(`
  Olá usuário! Seja bem vindo ao Fifo's madeira nitobas game!

  Digite a opção desejada:
  1. Começar
  2. Como jogar
  3. Sair do programa
  `))
  switch (option) {
  case 1:
    ask = prompt(`Adivinhe o número que Fifo leva madeira nitobas. 
    
Está entre 0 e 10`);
    const randomNumber = Math.round(Math.random() * 10);
    while(Number(ask) != randomNumber) {
      ask = prompt(`Fifo ainda não levou a madeirada nitoba. 
Digite outro número para ajudar Marcondes a encontrar Fifo`);
      i++;
      randomStrings()
    }
    if(ask == randomNumber && i > 1) {
    alert(`Eba! Marcondes chegou e comeu Fifo em ${i} tentativas.`)
    i = 1;
    break
  } else if (ask == randomNumber && i <= 1) {
    alert(`Eba! Marcondes chegou e comeu Fifo em ${i} ${Attempts}.`)
    i = 1;
    break
  } 
  case 2: 
    alert(`
Para jogar é simples! 

Tente adivinhar um número de 0 a 10 e digite o número para tentar acertar quando Fifo leva madeirada nitobas.`)
    break
  
  case 3: 
    alert('Você saiu do programa.')
    break

  default: 
    alert('Opção inválida, tente novamente.')
}
}