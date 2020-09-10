'use strict'

function pokemon(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
}

var nameArg = prompt('What is your pokemon name?');
var healthArg = prompt('How much health do they have');
var attackArg = prompt('How much attack power?');
var defenseArg = prompt('How is the defense system?');

new pokemon(nameArg, healthArg, attackArg, defenseArg);



