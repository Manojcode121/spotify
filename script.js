let over=document.querySelector("#topcontainer");
let mymusic=document.querySelector("#music")
let click=true;
over.addEventListener("click",()=>{
    if(click==true){
    mymusic.play();
    click=false;
    }
    else{
        mymusic.pause();
        click=true;
    }
})
let over1=document.querySelector("#imagecont1");
let mymusic1=document.querySelector("#music1")
let click1=true;
over1.addEventListener("click",()=>{
    if(click1==true){
    mymusic1.play();
    click1=false;
    }
    else{
        mymusic1.pause();
        click1=true;
    }
})
let over2=document.querySelector("#imagecont2");
let mymusic2=document.querySelector("#music2")
let click2=true;
over2.addEventListener("click",()=>{
    if(click2==true){
    mymusic2.play();
    click2=false;
    }
    else{
        mymusic2.pause();
        click2=true;
    }
})