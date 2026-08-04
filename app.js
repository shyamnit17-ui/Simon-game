let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;
let highest = level;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        started == true;
        levelup();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function userFlash(btn) {
    btn.classList.add("user");
    setTimeout(function () {
        btn.classList.remove("user");
    }, 100);
}
function levelup() {
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;
    // random btn choose
    let randomidx = Math.floor(Math.random() * 3) + 1;
    let randcolor = btns[randomidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    gameFlash(randbtn);
}
function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        h2.innerHTML = `GAME OVER your score was <b>${level}</b>  <br>please try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
        findhs();
        reset();
    }
}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function findhs() {

    if (level > highest) {
        highest = level;
        let hs = document.querySelector("h3");
        hs.innerText = `your highest score till now is ${highest} `
    }
}
