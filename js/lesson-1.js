
// let number = prompt("Введіть число");
// if (Number(number) === 10) {
//     alert('Вірно');
// } else {
//     alert('Невірно');
// }
// const min = Math.floor(Math.random() * 60);

    
//     if (min >= 0 && min < 15) {
//       message =  `${min} входить в першу чверть`;
//     } else if(min >= 15 && min < 30){
//       message = `${min} входить в другу чверть`;
//     } else if (min >= 30 && min < 45) {
//         message = `${min} входить в третю чверть`;
//     } else if (min >= 45 && min < 60) {
//         message = `${min} входить в черверту чверть`;
//     }


// alert(message);
// let num = 'Введіть число від 1 до 4';
// let message = '';
// switch (prompt(num)) {
//   case '1':
//     message = prompt('зима');
//     break;
//     case '2':
//      message = prompt('весна');
//     break;
//     case '3':
//      message = prompt('літо');
//     break;
//     case '4':
//     message = prompt('осінь');
//     break;

//   default:
//     message = prompt('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
//     break;
// }
const login = prompt("Введіть логін")
if (login === "Адмін") {
  const password = prompt("Введіть пароль");
  if (password === "Я головний") {
    alert("Добрий день!");
  } else if (!password) {
    alert("Введення пароля скасовано");
  } else {
    alert("Невірний пароль");
}
} else if (!login) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
