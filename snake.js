let board;
let pixelsize = 25;
let snakeheadx= pixelsize*10;
let snakeheady= pixelsize*10;
let foodx;
let foody;
let rows = 18;
let cols = 30;
let context;
let movex=0;
let movey=0;
let snakebody=[];
let gameover = false;
let score=0;
let obs1x=pixelsize*3;
let obs1y=pixelsize*4;
let obs2x=pixelsize*3;
let obs2y=pixelsize*5;
let obs3x=pixelsize*3;
let obs3y=pixelsize*6;

let obs4x=pixelsize*13;
let obs4y=pixelsize*12;
let obs5x=pixelsize*13;
let obs5y=pixelsize*13;
let obs6x=pixelsize*13;
let obs6y=pixelsize*14;

let obs7x=pixelsize*23;
let obs7y=pixelsize*7;
let obs8x=pixelsize*23;
let obs8y=pixelsize*8;
let obs9x=pixelsize*23;
let obs9y=pixelsize*9;

window.onload = function(){
    board = document.getElementById("board");
    board.width = pixelsize*cols;
    board.height = pixelsize*rows;
    context = board.getContext("2d");
    
    randomfood();
    document.addEventListener("keyup",direction);
    setInterval(gameupdate,1000/8);
   
}

function gameupdate(){
    if(gameover){
        document.querySelector("#gameover").innerHTML = "Game Over!";
        document.querySelector("#restart").style.display = "inline";
        return;
    }else{

    
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle = "yellow";
    context.fillRect(obs1x,obs1y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs2x,obs2y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs3x,obs3y,pixelsize,pixelsize);

    context.fillStyle = "yellow";
    context.fillRect(obs4x,obs4y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs5x,obs5y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs6x,obs6y,pixelsize,pixelsize);

    context.fillStyle = "yellow";
    context.fillRect(obs7x,obs7y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs8x,obs8y,pixelsize,pixelsize);
    context.fillStyle = "yellow";
    context.fillRect(obs9x,obs9y,pixelsize,pixelsize);


    context.fillStyle="red";
    context.fillRect(foodx,foody,pixelsize,pixelsize);

    if(foodx == snakeheadx && foody == snakeheady){
        snakebody.push([foodx,foody]);
        randomfood();
        score+=1;
        document.querySelector("#score").innerHTML = "Score🎯 : "+score;
    }
    
    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i] = snakebody[i-1];
    }

    if(snakebody.length){
        snakebody[0]=[snakeheadx,snakeheady]; 
    }
    context.fillStyle = "lime";
    snakeheadx+=movex*pixelsize;
    snakeheady+=movey*pixelsize;
    context.fillRect(snakeheadx,snakeheady,pixelsize,pixelsize);
    for(let i=0;i<snakebody.length;i++){
        context.fillRect(snakebody[i][0],snakebody[i][1],pixelsize,pixelsize);
    }

    if((snakeheadx<0 || snakeheadx>cols*pixelsize)||(snakeheady<0 || snakeheady>rows*pixelsize)){
        gameover=true;
    }

    if(((snakeheadx==obs1x) || (snakeheadx==obs2x)|| (snakeheadx==obs2x)) &&  ((snakeheady==obs1y) || (snakeheady==obs2y)|| (snakeheady==obs2y))){
        gameover =true;
    }

    if(((snakeheadx==obs4x) || (snakeheadx==obs5x)|| (snakeheadx==obs6x)) &&  ((snakeheady==obs4y) || (snakeheady==obs5y)|| (snakeheady==obs6y))){
        gameover =true;
    }

    if(((snakeheadx==obs7x) || (snakeheadx==obs7x)|| (snakeheadx==obs8x)) &&  ((snakeheady==obs8y) || (snakeheady==obs9y)|| (snakeheady==obs9y))){
        gameover =true;
    }

    for(let i=0;i<snakebody.length;i++){
        if((snakeheadx==snakebody[i][0]) && (snakeheady==snakebody[i][1])){
                gameover=true;
        }
    }

}
}

function direction(e){
    if(e.code == "ArrowUp" && movey!=1){
        movex = 0;
        movey= -1;
    }else if(e.code == "ArrowDown" && movey!=-1){
        movex = 0;
        movey = 1;
    }else if(e.code == "ArrowRight" && movex!=-1){
        movex = 1;
        movey = 0;
    }else if(e.code == "ArrowLeft" && movex!=1){
        movex = -1;
        movey = 0;
    }

}

function randomfood(){
    foodx = Math.floor(Math.random()*cols)*pixelsize;
    foody = Math.floor(Math.random()*rows)*pixelsize;
    if(((foodx==obs1x) || (foodx==obs2x)|| (foodx==obs2x)) &&  ((foody==obs1y) || (foody==obs2y)|| (foody==obs2y))){
       randomfood();
    }
    if(((foodx==obs4x) || (foodx==obs5x)|| (foodx==obs6x)) &&  ((foody==obs4y) || (foody==obs5y)|| (foody==obs6y))){
        randomfood();
     }
     if(((foodx==obs7x) || (foodx==obs8x)|| (foodx==obs9x)) &&  ((foody==obs7y) || (foody==obs8y)|| (foody==obs9y))){
        randomfood();
     }
}
