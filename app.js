class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.age = 1;
        this.boredom = 1;
    }
    feed() {
        if (pet.hunger > 1){
            hungry.innerText = `Hunger: ${pet.hunger -= 1}`
        } else {
            alert(`${pet.name} is full!`)
        }
    }
    play() {
        if (pet.boredom > 1){
            bored.innerText = `Boredom: ${pet.boredom -= 1}`
        } else {
            alert(`${pet.name} isn't bored!`)
        }
    }
    sleep() {
        if (pet.sleepiness > 1){
            sleepy.innerText = `Sleepiness: ${pet.sleepiness -= 1}`
        } else {
            alert(`${pet.name} isn't sleepy!`)
        }
    }
    shake() {
        circle.style.animation = "shake .2s 3";
    }
}
const pet = new Tomagotchi(`${prompt("Name your pet!")}`);
const body = document.querySelector("body");
const img = document.querySelector("img");
// body.addNewElement(`<h1>Name:${pet.name}</h1>`)
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const hungry = document.querySelector(".hunger");
const bored = document.querySelector(".bored");
const sleepy = document.querySelector(".sleepy");
const feedButton = document.querySelector(".feed");
const playButton = document.querySelector(".play");
const sleepButton = document.querySelector(".goSleep");
const shakeButton = document.querySelector(".shake");
const checkers = document.querySelector(".checkers");
const circle = document.querySelector("#circle");
age.innerText += pet.age;
name.innerText += pet.name;
hungry.innerText += pet.hunger;
bored.innerText += pet.boredom;
sleepy.innerText += pet.sleepiness;

// when button is pushed....
// const feed = () => {
//     if (pet.hunger > 1){
//         hungry.innerText = `Hunger: ${pet.hunger -= 1}`
//     } else {
//         alert(`${pet.name} is full!`)
//     }

// }
// const play = () => {
//     if (pet.boredom > 1){
//         bored.innerText = `Boredom: ${pet.boredom -= 1}`
//     } else {
//         alert(`${pet.name} isn't bored!`)
//     }

// }
// const sleep = () => {
//     if (pet.sleepiness > 1){
//         sleepy.innerText = `Sleepiness: ${pet.sleepiness -= 1}`
//     } else {
//         alert(`${pet.name} isn't sleepy!`)
//     }
// }

// feed
feedButton.addEventListener("click", pet.feed);

// play
playButton.addEventListener("click", pet.play);

// sleep
sleepButton.addEventListener("click", pet.sleep);
shakeButton.addEventListener("click", pet.shake);

const render = () => {
    pet.hunger += 1
    hungry.innerText = `Hunger: ${pet.hunger}`;
    pet.boredom += 1
    bored.innerText = `Boredom: ${pet.boredom}`;
    pet.sleepiness += 1
    sleepy.innerText = `Sleepiness: ${pet.sleepiness}`;
    return deadAF();
}
let checkUp = setInterval(render, 5000)
// feed increase
// const hangry = () => {
//     return deadAF();
//     // if (pet.hunger < 10) {
//     //pet.hunger += 1
//     //hungry.innerText = `Hunger: ${pet.hunger}`;
//     //if (pet.hunger === 10) {
//         // alert("YOU KILL YOUR PET!! YOU MURDERER!!")
//     //}
// }
// let feedUp = setInterval(hangry, 1000)

// boredom increase
// const boredAF = () => {
//     return deadAF();
//     //if (pet.boredom < 10) {
//     //bored.innerText = `Boredom: ${pet.boredom += 1}`;
//     //if (pet.boredom === 10) {
        
//         //alert("YOU KILL YOUR PET!! YOU MURDERER!!")
//     //}
// }
// let boredUp = setInterval(boredAF, 5000)
// // sleep increase
// const sleepyAF = () => {
//     return deadAF();
//     //if (pet.sleepiness < 10) {
//     //sleepy.innerText = `Sleepiness: ${pet.sleepiness += 1}`;
//     // if (pet.sleepiness === 10){ 
//         //alert("YOU KILL YOUR PET!! YOU MURDERER!!")
//     //}
// }
// let sleepUp = setInterval(sleepyAF, 10000)

const oldAF = () => {
    pet.age += 1
    age.innerText = `Age: ${pet.age}`
    if (pet.age === 5) {
        img.src = "https://media.giphy.com/media/3KXUztaYAzHaFH6et3/giphy.gif";
        //body.style.background = "url('https://media.giphy.com/media/3KXUztaYAzHaFH6et3/giphy.gif') no-repeat center fixed";
        //body.style.backgroundSize = "cover";
    } else if (pet.age === 10) {

        img.src = "https://media.giphy.com/media/7A4GONnjiqxmRhjfgH/giphy.gif";
        //body.style.background = "url('https://media.giphy.com/media/7A4GONnjiqxmRhjfgH/giphy.gif') no-repeat center fixed";
        //body.style.backgroundSize = "cover";
    }
}
let ageUp = setInterval(oldAF, 10000)


// DED AF
const deadAF = () => {
    if (pet.sleepiness === 10 || pet.boredom === 10 || pet.hunger === 10) {
        clearInterval(checkUp);
        clearInterval(ageUp);
    checkers.style.color = "red";
    // clearInterval(feedUp);
    // clearInterval(boredUp);
    // clearInterval(ageUp);
    img.src = "gifs/dead.gif";

    alert("WASTED!! YOUR PET DIED!")
    // let restart = prompt("YOU KILL YOUR PET!! YOU MURDERER!! Do you want to restart? Yes/No?")
    // if (restart.toLowerCase() === "yes"){
    //     location.reload(true);
    // }
    // } else {
    //     render();
    }
}


