document.addEventListener("DOMContentLoaded",()=>{


    let gameboard = ['','','','','','','','',''];
    let winningCase = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    let currentPlayer = "X";
    let winner = "";



    // enter play game and back 

    let home = document.querySelector(".home");
    let game = document.querySelector(".game");
    let playbtn = document.querySelector("#play-btn");
    let backbtn = document.querySelector("#back-btn");
    let again = document.querySelector("#again");
    let result = document.querySelector("#result");
    playbtn.onclick = ()=>{    
        home.style.display = "none";
        game.style.display = "flex";      
        result.style.display = "block";      
    }
    backbtn.onclick = ()=>{
        game.style.display = "none";
        result.style.display = "none";
        home.style.display = "block";       
    }
  
     // enter play game and back 

    document.querySelectorAll("#btn").forEach((btn,index)=>{  
        btn.onclick = ()=>{
            play(index)     
            btn.innerHTML = `<h1 class="player">${gameboard[index]}</h1>`
            check() 
            btn.classList.add("dis")   
            checkTie()            
        }
    })

    function gameWin(){
        if(currentPlayer == "X"){
            winner = "O"
        }
        else{
            winner = "X"
        }
        result.innerHTML = `Winner is ${winner} player 😉🎉`
        reset()
    }    

    function reset(){
        gameboard = ['','','','','','','','',''];
        currentPlayer = "X";
        document.querySelectorAll("#btn").forEach(btn=>{
            btn.classList.add("dis")   
        })
    }

    function play(index){
        gameboard[index] = currentPlayer;
        if(currentPlayer === "X"){
            currentPlayer = "O"
        }else{
            currentPlayer = "X"
        }
    
    }

    function check(){
        for(let i = 0; i <= 7; i++)
        {
            let win = winningCase[i]
            let a = gameboard[win[0]]
            let b = gameboard[win[1]]
            let c = gameboard[win[2]]
            if(a == '' && b == '' && c == ''){
                continue
            }
            if(a === b && b === c){
                gameWin()
            }
        }
    }
    function checkTie(){       
       if(!gameboard.includes('')){
            result.innerHTML = `It's a tie!🤝`
            reset()
       }
    }


  
    again.onclick = ()=>{
        gameboard = ['','','','','','','','','']
        currentPlayer = "X";
        result.innerHTML = 'Playing...🏃';
        document.querySelectorAll("#btn").forEach(btn=>{
            btn.classList.remove("dis")  
            btn.innerHTML = `<h1 class="player"></h1>` 
        })
    }



    

    

     
})