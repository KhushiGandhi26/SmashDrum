function playCrash(){
    const audio=new Audio("sounds/crash.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[0].addEventListener("click",playCrash);

function kick(){
    const audio=new Audio("sounds/kick-bass.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[1].addEventListener("click",kick);

function snare(){
    const audio=new Audio("sounds/snare.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[2].addEventListener("click",snare);

function tom1(){
    const audio=new Audio("sounds/tom-1.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[3].addEventListener("click",tom1);

function tom2(){
    const audio=new Audio("sounds/tom-2.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[4].addEventListener("click",tom2);

function tom3(){
    const audio=new Audio("sounds/tom-3.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[5].addEventListener("click",tom3);

function tom4(){
    const audio=new Audio("sounds/tom-4.mp3")
    audio.play();
}
document.querySelectorAll(".drum")[6].addEventListener("click",tom4);


document.addEventListener('keydown',(event)=>{
    if(keyName=='w'|| keyName=='W'){
        const audio=new Audio("sounds/crash.mp3")
        audio.play();
    }
})