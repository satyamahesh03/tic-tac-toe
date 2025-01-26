let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winning = document.querySelector("#win-output");
let hidden = document.querySelector(".hidden-one");
let newgameBtn = document.querySelector("#newgame-btn");
let resetHide = document.querySelector("#reset-hide");

const winsPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnx = true;
let count = 0;

let reset = () => {
    turnx = true;
    count = 0;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    hidden.classList.add("hidden-one");
};

let newgame = () => {
    turnx = true;
    count = 0;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    hidden.classList.add("hidden-one");
    resetHide.style.display = "block";
};

let checkwinner = () => {
    for (let wins of winsPattern) {
        let val1 = boxes[wins[0]].innerText;
        let val2 = boxes[wins[1]].innerText;
        let val3 = boxes[wins[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                winning.innerText = `Winner is ${val1}`;
                hidden.classList.remove("hidden-one");
                for (let box of boxes) {
                    box.disabled = true;
                }
                resetHide.style.display = "none";
                return true;
            }
        }
    }
    if (count === 9) {
        gameDraw();
        return true;
    }
    return false;
};

const gameDraw = () => {
    winning.innerText = `Game was a Draw.`;
    hidden.classList.remove("hidden-one");
    for (let box of boxes) {
        box.disabled = true;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            let xval = document.createElement("span");
            xval.innerText = "X";
            xval.style.color = "rgb(155, 101, 101)";
            box.innerHTML = '';
            box.appendChild(xval);
            turnx = false;
        } else {
            let oval = document.createElement("span");
            oval.innerText = "O";
            oval.style.color = "#ECEBDE";
            box.innerHTML = '';
            box.appendChild(oval);
            turnx = true;
        }
        box.disabled = true;
        count++;
        checkwinner();
    });
});

resetbtn.addEventListener("click", reset);
newgameBtn.addEventListener("click", newgame);
