class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.age = 0;
        this.boredom = 1;
    }
}
const pet = new Tomagotchi(`${prompt("Name your pet!")}`)
// const body = document.querySelector("body");
// body.addNewElement(`<h1>Name:${pet.name}</h1>`)
document.querySelector("h1").innerHTML += pet.name;
document.querySelector("h2").innerHTML += pet.age;
