
let boxes = document.querySelectorAll(".box");
let playerturn = "X";
let gameover = false;

boxes.forEach(b=>{
  b.innerHTML = "";
  b.addEventListener("click",()=>{
       if((!gameover) && (b.innerHTML==="")){
        b.innerHTML=playerturn;
        iswin();
        isdraw();
        changeturn();
       }
  })
})

function changeturn(){
    if(playerturn==="X"){
        playerturn = "O";
        document.querySelector(".bgc").style.left = "85px";
    }else{
        playerturn="X";
        document.querySelector(".bgc").style.left="0";
    }
}

function iswin(){
    const condition = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6,],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


    for(let i=0;i<condition.length;i++){
        let c1 = boxes[condition[i][0]].innerHTML;
        let c2 = boxes[condition[i][1]].innerHTML;
        let c3 = boxes[condition[i][2]].innerHTML;

        if((c1!="")&&(c1===c2)&&(c2===c3)){
            gameover=true;
            document.querySelector("#winner").innerHTML = playerturn + " wins the Game!";
            document.querySelector("#reset").style.display = "inline";

            for(let j=0;j<3;j++){
                boxes[condition[i][j]].style.backgroundColor = "#adff2f";
                boxes[condition[i][j]].style.color = "black";
            }
        }
    }
}

function isdraw(){ 
if(!gameover){
    let draw = true;
    boxes.forEach(e=>{
        if(e.innerHTML===""){
            draw = false;
        }
    })

    if(draw){
        gameover=true;
        document.querySelector("#winner").innerHTML = "Game ends in Draw!";
        document.querySelector("#reset").style.display = "inline";
    
    }
}
}

document.querySelector("#reset").addEventListener("click",()=>{
   gameover=false;
   playerturn="X";
   document.querySelector(".bgc").style.left="0";
   document.querySelector("#winner").innerHTML="";
   document.querySelector("#reset").style.display = "none";
   

   boxes.forEach(b =>{
    b.innerHTML = "";
    b.style.removeProperty("background-color");
    b.style.color = "white";
   })

})