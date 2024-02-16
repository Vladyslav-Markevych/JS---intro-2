let start = confirm("Would you like to start game?");
if (start == 1) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let number = +prompt("Choose number from 1 to 10:"); // +promt (потому что promt всегда выдает строку)
  if (isNaN(number)) {
    // Если ввели что угодно кроме числа, то number будет NaN (проверка)
    alert("This is not a number");
  } else {
    if (number < 1 || number > 10) {
      // Если число больше или меньше чем в условиях, то
      alert("Only from 1 to 10 !!");
    } else {
      if (number == randomNumber) {
        // сравнение введенного
        alert("Win! right answer = " + randomNumber);
      } else {
        alert("lose, right answer = " + randomNumber);
      }
      alert("Thank you for playing");
    }
  }
} else {
  alert("Maybe later, bye");
}
