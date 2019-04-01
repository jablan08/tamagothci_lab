class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 8;
        this.sleepiness = 1;
        this.age = 0;
        this.boredom = 1;
    }
}
const pet = new Tomagotchi(`${prompt("Name your pet!")}`)
// const body = document.querySelector("body");
// body.addNewElement(`<h1>Name:${pet.name}</h1>`)
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const hungry = document.querySelector(".hunger");
const bored = document.querySelector(".bored");
const sleepy = document.querySelector(".sleepy");
const feedButton = document.querySelector(".feed")
const playButton = document.querySelector(".play")
const sleepButton = document.querySelector(".goSleep")
age.innerText += pet.age;
name.innerText += pet.name;
hungry.innerText += Number(pet.hunger);
bored.innerText += pet.boredom;
sleepy.innerText += pet.sleepiness;

// when button is pushed....
const feed = () => {
    if (pet.hunger > 1){
        hungry.innerText = `Hunger: ${pet.hunger -= 1}`
    } else {
        alert(`${pet.name} is full!`)
    }

}
const play = () => {
    if (pet.boredom > 1){
        bored.innerText = `Boredom: ${pet.boredom -= 1}`
    } else {
        alert(`${pet.name} isn't bored!`)
    }

}
const sleep = () => {
    if (pet.sleepiness > 1){
        sleepy.innerText = `Sleepiness: ${pet.sleepiness -= 1}`
    } else {
        alert(`${pet.name} isn't sleepy!`)
    }
}

// feed
feedButton.addEventListener("click", feed);

// play
playButton.addEventListener("click", play);

// sleep
sleepButton.addEventListener("click", sleep);

// feed increase
const hangry = () => {
    // if (pet.hunger < 10) {
    hungry.innerText = `Hunger: ${pet.hunger += 1}`
    if (pet.hunger === 10) {
        deadAF();
        // alert("YOU KILL YOUR PET!! YOU MURDERER!!")
    }
}
let feedUp = setInterval(hangry, 3000)

// boredom increase
const boredAF = () => {
    //if (pet.boredom < 10) {
    bored.innerText = `Boredom: ${pet.boredom += 1}`
    if (pet.boredom === 10) {
        deadAF();
        //alert("YOU KILL YOUR PET!! YOU MURDERER!!")
    }
}
let boredUp = setInterval(boredAF, 3000)
// sleep increase
const sleepyAF = () => {
    //if (pet.sleepiness < 10) {
    sleepy.innerText = `Sleepiness: ${pet.sleepiness += 1}`
    if (pet.sleepiness === 10){
        deadAF();
        //alert("YOU KILL YOUR PET!! YOU MURDERER!!")
    }
}
let sleepUp = setInterval(sleepyAF, 3000)

// DED AF
const deadAF = () => {
    clearInterval(sleepUp);
    clearInterval(feedUp);
    clearInterval(boredUp);
    let restart = prompt("YOU KILL YOUR PET!! YOU MURDERER!! Do you want to restart? Yes/No?")
    if (restart.toLowerCase() === "yes"){
        location.reload(true);
    }
}


