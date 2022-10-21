let turn =new Audio("ting.mp3")
let music=new Audio("music.mp3")
let gameover= new Audio("gameover.mp3")
let move="X"
let isgameover=false


//function to change the move 
const changeMove=()=>{
    return move==="X"? "0":"X";
}

//check for win
const checkwin=()=>{
    let letter=document.getElementsByClassName("letter")
    let wins=[
        [0,1,2,4,4,0],
        [3,4,5,4,12,0],
        [6,7,8,4,20,0],
        [0,3,6,-4,12,90],
        [1,4,7,4,12,90],
        [2,5,8,12,12,90],
        [0,4,8,4,12,45],
        [2,4,6,4,12,135],
    ]
    wins.forEach((e)=>{
        if((letter[e[0]].innerText===letter[e[1]].innerText) && (letter[e[1]].innerText===letter[e[2]].innerText) && (letter[e[0]].innerText!=='')){
            document.querySelector(".text1").innerText=letter[e[0]].innerText+" Won";
            isgameover=true
            gameover.play()
            music.play()
            document.getElementsByTagName("img")[0].style.width="150px"
            document.querySelector(".line").style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width= "16vw";
        }
    })

}

//function to make a move
let moves=document.getElementsByClassName("box1")
Array.from(moves).forEach(e=>{
  let letter=e.querySelector(".letter")
  e.addEventListener("click",()=>{
    if(letter.innerText===""){
        letter.textContent=move
        move=changeMove()
        turn.play()
        checkwin()
        if(!isgameover){
            document.querySelector(".text1").innerText="Turn for "+ move
        }
    }
  })
})

//function for reset everything
reset.addEventListener("click",()=>{
    let letter=document.querySelectorAll(".letter")
    Array.from(letter).forEach(e=>{
        e.innerText=''
})
    move="X";
    isgameover=false;
    music.pause()
    document.querySelector(".line").style.width= "0vw";
    document.querySelector(".text1").innerText="Turn for "+ move
    document.getElementsByTagName("img")[0].style.width="0px"
})