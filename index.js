let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i =0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // this detects button within the html doc 
    let buttonInnerHTML = this.innerHTML;    
      createSound(buttonInnerHTML)    

        btnAnimation(buttonInnerHTML)
    })
}
// this detects key press
document.addEventListener("keydown", function(event){
    createSound(event.key)

    btnAnimation(event.key)
})

// this detect 
function createSound(key){
    switch (key) {
        case "w":
            let drumW = new Audio("sounds/tom-1.mp3");
            drumW.play();
            break;
        case "a":
            let drumA = new Audio("sounds/tom-2.mp3");
            drumA.play();    
            break;
        case "s":
            let drumS = new Audio("sounds/tom-3.mp3");
            drumS.play();
            break;
        case "d":
            let drumD = new Audio("sounds/tom-4.mp3");
            drumD.play();    
            break;
        case "j":
            let drumJ = new Audio("sounds/crash.mp3");
            drumJ.play();
            break;
        case "k":
            let drumK = new Audio("sounds/kick-bass.mp3");
            drumK.play();    
            break;
        case "l":
            let drumL = new Audio("sounds/snare.mp3");
            drumL.play();
            break;
       


        default:
            break;
      }
}
function btnAnimation(currentKey){
    let activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed"), 100
    })
}