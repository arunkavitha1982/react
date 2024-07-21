let input = document.getElementById("number").value;
// let submit = document.getElementById("button")
let randomNumber= Math.floor(Math.random()*(20+1))

function submit(){
    if(input>randomNumber){
        console.log("input is big")
    }
    else if(input<randomNumber)[
        console.log("input is small")
    ]
    else{
        console.log("you are win")
    }
}