let btnEle = document.querySelector(".generate");
let serialEle = document.querySelector(".serial");

btnEle.onclick = function() {
    let charaters = "1234567890zxcvbnmlkjhgfdsaqwertyuiop#@%";
    let countCharacter = 10;
    let randomCharacter = "";
    for (let i = 0; i < countCharacter; i++) {
        randomCharacter += charaters[Math.floor(Math.random() * charaters.length)]
    };
    serialEle.innerHTML = randomCharacter;
};