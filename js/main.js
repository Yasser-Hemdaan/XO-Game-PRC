let turn = "X";
let title = document.querySelector(".title");
let boxes = [];
let boxesLength = 0;


let winner = () => {
    boxesLength += 1;
  for (let i = 1; i <= 9; i++) {
    boxes[i] = document.getElementById("box" + i).innerHTML;
  }
  if (boxes[1] === boxes[2] && boxes[2] === boxes[3] && boxes[1] != "") {
    end(1,2,3);
  } else if (boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[6] != "") {
    end(4,5,6);
  } else if (boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[9] != "") {
    end(7,8,9);
  } else if (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[7] != "") {
    end(1,4,7);
  } else if (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[8] != "") {
    end(2,5,8);
  } else if (boxes[3] === boxes[6] && boxes[6] === boxes[9] && boxes[9] != "") {
    end(3,6,9);
  } else if (boxes[1] === boxes[5] && boxes[5] === boxes[9] && boxes[9] != "") {
    end(1,5,9);
  } else if (boxes[3] === boxes[5] && boxes[5] === boxes[7] && boxes[7] != "") {
    end(3,5,7);
  }
}





let all = () =>{
    if(boxesLength == 9){
        setInterval(() => {
           title.innerHTML = "Tie" 
        }, 100);
        setTimeout(() => {
           location.reload(); 
        }, 2000);
    }
}

let end = (num1, num2, num3) => {
  document.getElementById('box'+num1).style.background = "var(--hoverBoxColor)";
  document.getElementById('box'+num2).style.background = "var(--hoverBoxColor)";
  document.getElementById('box'+num3).style.background = "var(--hoverBoxColor)";
  

  title.innerHTML = boxes[num1] + " is Winner";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}

let game = (id) =>  {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    title.innerHTML = "O";
    turn = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    title.innerHTML = "X";
    turn = "X";
  }
  winner();
  all();
}
