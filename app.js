

let user;
let comp;
let comptData;
let winner;
let count = 0;

let rock = document.querySelector(".box1");
let paper = document.querySelector(".box2");
let scissor = document.querySelector(".box3");
let para = document.querySelector("p");
let userData = document.querySelector("#user");
let compData = document.querySelector("#comp");
let divCount = document.querySelector(".count")

rock.addEventListener("click",() => {
    user = rock.innerText;
    comp = randomNum();
   check();
   checkWinnerForRock();
   userData.innerText = ` You selected : ${user}!`;
   compData.innerText = `I selected : ${comptData}!`;
   para.classList.add("ptag");
   countNum();

});





paper.addEventListener("click",() => {
    user = paper.innerText;
    comp = randomNum();
   check();
   checkWinnerForPaper();
   userData.innerText = ` You selected : ${user}!`;
   compData.innerText = `I selected : ${comptData}!`;
   para.classList.add("ptag");
   countNum();




});
scissor.addEventListener("click",() => {
    user = scissor.innerText;
    comp = randomNum();
   check();
   checkWinnerForScissor();
   userData.innerText = ` You selected : ${user}!`;
   compData.innerText = `I selected : ${comptData}!`;
   para.classList.add("ptag");
   countNum();




});


const randomNum =() => {
    return Math.floor(Math.random()*3);
};

const check = () => {
     if (comp === 0){
        comptData = "Rock";
    } else if (comp === 1){
       comptData = "Paper";
    } else if (comp === 2){
        comptData = "Scissor";
    } else {
        comptData = "Please Select Again";
    }
};

const checkWinnerForRock = () => {
    if(user === "Rock" && comp === 0){
        para.innerText = "It's Draw";
    } else if (user === "Rock" && comp === 1){
        para.innerText = "I am the Winner";
    } else if (user ==="Rock" && comp === 2){
        para.innerText = "You are the Winner";
    }
};
const checkWinnerForPaper = () => {
    if(user === "Paper" && comp === 0){
        para.innerText = "You are the Winner";
    } else if (user === "Paper" && comp === 1){
       para.innerText = "It's Draw";
    } else if (user ==="Paper" && comp === 2){
        para.innerText = "I am the Winner";
    }
};
const checkWinnerForScissor = () => {
    if(user === "Scissor" && comp === 0){
        para.innerText = "I am the Winner";
    } else if (user === "Scissor" && comp === 1){
        para.innerText = "You are the Winner";
    } else if (user === "Scissor" && comp === 2){
        para.innerText = "It's Draw";
    }
};

const countNum = () => {
     count++;
    divCount.innerText = `Clicked ${count}`;
};