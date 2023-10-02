'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
/* Aprendimos a generar un numero aleatorio mediante random y usando trunc
podemos generar numeros sin decimal, de igual forma al añádir una multiplicacion le indicamos
cual sera el rango es decir, de 0 a tal, y añadiendo un +1 le pertimos que incluya el numero final ya que 
de no hacerlo jamas incluiria este.*/
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  let valueGuess = Number(document.querySelector('.guess').value);
  console.log(!valueGuess);
  if (!valueGuess) {
    /*Usar la negacion nos ayuda a validar primero que si sucede lo que no queremos que suceda, se ejecute primero dicha 
    declarion, es decir, que si primero se detecta un false, este se convertira en true y ejecutara directamente */
    displayMessage('⛔ Ingresa un numero');
    /*Para poder asignar un text content, es mejor hacerlo directo y evitar usar variables. */
  } else if (valueGuess === secretNumber) {
    if (score > 1) {
      displayMessage('🎉 Adivinaste el numero!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      return;
    }
    displayMessage('💥 Has Perdido');
    document.querySelector('.score').textContent = 0;
  } else if (valueGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        valueGuess > secretNumber
          ? '📈 Te has pasado'
          : '📉 Te has quedado corto'
      );
      score--;
      document.querySelector('.score').textContent = score;
      return;
    }
    displayMessage('💥 Has Perdido');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Empieza a adivinar..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  /* Para manipular los estilos desde JS es importante el metodo de style, seguido de la propiedad
  con el mismo nombre que tiene en CSS solo que cambiando los guiones por la eliminacion del guion y usando
  camelCase*/
  document.querySelector('.number').style.width = '15rem';
});
