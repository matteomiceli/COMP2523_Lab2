// Imports

// Hit enter to see main menu

// ------------------------------
// |      Reminders menu:       |
// ------------------------------
// |  [1] Show all reminders 👀  
// |  [2] Search reminders 🔎    
// |  [3] Add reminder ✏️        
// |  [4] Modify reminders ✍️   
// |  [5] Toggle completion ⭕️ 🔴  
// |  [6] Exit 👋                
// ------------------------------

// [1] Display all objects of class reminder

// [2] Be able to sort through reminders and filter by string input

// [3] Create new object of class reminder

// [4] Update an object of class reminder 

// [5] True/false toggle for done --> if done = true then, etc.

// [6] Exit -- For exit to be part of this function must mean that 
//             the entire program is contained in a single func 

import { question } from 'readline-sync';

class Reminders {
    message: string;
    tag: string;
    toggelComplete: boolean;

    constructor(msg: string, tag: string) {
        this.message = msg;
        this.tag = tag;
        this.toggelComplete = false;
    }
}

function queryMenu () {
    let response = question('Hit the [Enter] key to see main menu: ');
    return response;
}

function mainMenu () {
    let response = question('Hit the [Enter] key to see main menu: ');

    if (response != "") {
        console.log('Invalid input');
    } else {
        console.log(
            `
            ------------------------------
            |      Reminders menu:       |
            ------------------------------
            |  [1] Show all reminders 👀  
            |  [2] Search reminders 🔎    
            |  [3] Add reminder ✏️        
            |  [4] Modify reminders ✍️   
            |  [5] Toggle completion ⭕️ 🔴  
            |  [6] Exit 👋                
            ------------------------------`
        );
    }
}

mainMenu();

function run() {
    
}

function newFunction () {

}


// let test = new Reminders('Wake up', 'morning');

// console.log(test);