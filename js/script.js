var inputNumber = document.getElementById("inputNumber");
var list = document.getElementById("List");
var seviye = document.getElementById("level");
var hakk = document.getElementById("hak");
var button = document.getElementById("button");

function getRandomInteger(minNumber, maxNumber) {
  let min = Math.ceil(minNumber);
  let max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min)) + min;
}

var flag = 0;
var level = 1;
var hak = 5;
var time = 30;
var randomNumber;
function Run() {
  if (flag == 0) {
    randomNumber = getRandomInteger(1, 10 * level + 1);
    flag = 1;
  }
  if (flag == 1) {
    if (hak == 0) {
      console.log("Oyun bitti.");
      button.innerText = "Oyun Bitti";
      button.disabled = "false";
      inputNumber.disabled = "false";
    } else {
      if (randomNumber == inputNumber.value) {
        list.innerHTML = `<li>Doğru Tahmin: ${randomNumber}</li>`;
        inputNumber.value = "";
        flag = 0;
        hak = 5;
        level += 1;
        seviye.innerHTML = `Seviye: ${level}`;
        hakk.innerHTML = `Hak: ${hak}`
      } else {
        console.log("yanlış tahmin");
        hak -= 1;
        inputNumber.value = "";
        hakk.innerHTML = `Hak: ${hak}`
      }
    }
  }
  console.log(randomNumber);
}
