class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 7;
        this.sleepiness = 10;
        this.age = 0;
        this.boredom = 9;
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
age.innerHTML += pet.age;
name.innerHTML += pet.name;
hungry.innerHTML += Number(pet.hunger);
bored.innerHTML += pet.boredom;
sleepy.innerHTML += pet.sleepiness;

// when button is pushed....
const feed = () => {
    if (pet.hunger > 1){
        hungry.innerHTML = `Hunger: ${pet.hunger -= 1}`
    } else {
        alert(`${pet.name} is full!`)
    }

}
const play = () => {
    if (pet.boredom > 1){
        bored.innerHTML = `Boredom: ${pet.boredom -= 1}`
    } else {
        alert(`${pet.name} isn't bored!`)
    }

}
const sleep = () => {
    if (pet.sleepiness > 1){
        sleepy.innerHTML = `Sleepiness: ${pet.sleepiness -= 1}`
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
