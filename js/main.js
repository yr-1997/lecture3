const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item))); // максимальне число
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
function ucFirst(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}
const change = function (salary) {
  let tax = 18;
  let allTax = tax + 1.5;
  return salary - (salary / 100) * allTax;
};
function getRandomNumber(number) {
  return Math.ceil(Math.random() * number);
}
const countLetter = function (letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
};
const convertCurrency = function (firstCurrency) {
  let secondCurrency = "";
  if (firstCurrency.slice(-3).toUpperCase() === "UAH") {
    secondCurrency =
      Math.round((parseInt(firstCurrency) / 28) * 100) / 100 + "$";
  } else if (firstCurrency.slice(-1) === "$") {
    secondCurrency = parseInt(firstCurrency) * 28 + "UAH";
  } else {
    secondCurrency = "Error";
  }
  return secondCurrency;
};
function getRandomPassword(len) {
  if (len > 10) len = 10;
  len = len * -1;
  return Math.random().toString(36).slice(len);
}
const deleteLetters = function (deleteLetter, string) {
  let formatedString = "";

  const splitedString = string.split("");
  for (let letter of splitedString) {
    if (letter === deleteLetter) {
      continue;
    }
    formatedString += letter;
  }
  return formatedString;
};
const isPalyndrom = function (string) {
  const modyfiedString = string.split(" ").join("").toLowerCase();
  const reverseString = modyfiedString.split("").reverse().join("");
  return modyfiedString === reverseString;
};
const deleteDuplicateLetter = (string) => {
  const changeString = string.toLowerCase().split("");
  let stringResult = "";
  for (let letter of changeString) {
    if (
      string.toLowerCase().indexOf(letter) ===
      string.toLowerCase().lastIndexOf(letter)
    ) {
      stringResult += letter;
    }
  }
  return stringResult;
};
document.writeln(
  `Функція №1 найбільше число серед заданних : ${getMaxDigit(
    prompt("веддіть декілька чисел")
  )}<br>
   Функція №2: ${pow(
     prompt("Функція №2: Введіть число"),
     prompt("Функція №2: Введіть степінь")
   )}<br>
   Функція №3 ваше відредаговане імя : ${ucFirst(
     prompt("введіть імя з маленької букви")
   )}<br>
   Функція №4 ваша зарпалата з урахванням податків : ${change(
     prompt("Функція №4: Введіть суму заробітньої плати")
   )}<br>
   Функція №5 ваше рандомне число : ${getRandomNumber(
     prompt("введіть рандомне число")
   )}<br>
   Функція №6: ${countLetter(
     prompt("Функція №6: Введіть літеру"),
     prompt("Функція №6: Введіть речення")
   )}<br>
   Функція №7 ваша сумма : ${convertCurrency(
     prompt("Функція №7: Введіть суму у форматі числоВалюта")
   )}<br>
   функція №8 ваш пароль: ${getRandomPassword(
     prompt(
       "функція 8 :введіть зі скількох значень повинен складатись ваш пароль"
     )
   )}<br>
   функція №9 ваші букви: ${deleteLetters(
     prompt("функція 9 :введіть літеру"),
     prompt("введіть слово")
   )}<br>
   Функція №10: ${isPalyndrom(prompt("Функція №10: Введіть речення"))}<br>
   Функція №11:${deleteDuplicateLetter(
     prompt("Функція №11: Введіть речення")
   )}<br>`
);
