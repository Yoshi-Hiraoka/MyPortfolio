'use strict';

{
  const h1 = document.createElement('h1');

  const message = [
    " Thank you for coming!",
    " It's a good day, huh?",
    " What's up mate?",
    " I hope you will be happy.",
    " Have a wonderful day!",
    " You are the Champion!",
    " How's it going?",
    " Hello World.",
    " Absence makes the heart grow fonder",
    " actions speak louder than words.",
    " All good things must come to an end.",
  ];

  const n = Math.floor(Math.random() * message.length);

  h1.textContent = message[n];
  document.querySelector('footer').appendChild(h1);
}
