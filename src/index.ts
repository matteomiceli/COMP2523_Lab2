

// [1] Display all objects of class reminder

// [2] Be able to sort through reminders and filter by string input

// [3] Create new object of class reminder

// [4] Update an object of class reminder 

// [5] True/false toggle for done --> if done = true then, etc.

// [6] Exit -- For exit to be part of this function must mean that 
//             the entire program is contained in a single func 


// IMPORTS
import { question } from 'readline-sync';


class Reminder {
    message: string;
    tag: string;
    toggleComplete: boolean;

    constructor(msg: string, tag: string) {
        this.message = msg;
        this.tag = tag;
        this.toggleComplete = false;
    }
}

let reminderArr: Reminder[] = [];

// Launches main menu -- start of program, ties to run function which handles all other menu option function
function mainMenu() {
    let response = "1";
    while (response != "") {
        response = question('Hit the [Enter] key to see main menu: ');
        if (response != "") {
            console.log('Invalid input');
        } else {
            console.log(`
                ------------------------------
                |      Reminders menu:       |
                ------------------------------
                |  [1] Show all reminders 👀  
                |  [2] Search reminders 🔎    
                |  [3] Add reminder ✏️        
                |  [4] Modify reminders ✍️   
                |  [5] Toggle completion ⭕️ 🔴  
                |  [6] Exit 👋                
                ------------------------------
                `
            )
            run();
        }
    }
}

// Runs helper functions for every main menu selection
function run() {
    let v = false;
    while (v == false) {
        let response = question('Please select a menu option: ');
        switch (response) {
            case '1': 
                listReminders(reminderArr);
                v = true;
                break;
            // case '2': 
            //     searchReminders();
            //     break;
            case '3':
                newReminder();
                v = true;
                break;
            case '6': 
                v = true;
                break;

            default:
                console.log('Invalid input');
        }
    }
}

// Option [1] -- Lists out all reminders
function listReminders(array: Reminder[]) {
    console.log(array); // Format this text to make more sense
    mainMenu();
}

// Option [3] -- Creates new reminderand pushes it to reminderArray
function newReminder() {
    let msg = question('Please enter a reminder message: ');
    let tag = question('Please enter a tag for your reminder: ');

    let reminder = new Reminder(msg, tag);

    let v = false;
    while (v == false) {
        let yesNo = question(`Add reminder '${reminder.message}'? y/n: `);
        let yesNoCase = yesNo.toLocaleLowerCase();
        if (yesNoCase == 'y') {
            reminderArr.push(reminder);
            console.log(`New reminder added!`);
            v = true;
        } else if (yesNoCase) {
            console.log('Reminder deleted');
            v = true;
        }
        else {
            console.log(`Please enter a valid input of either 'y' or 'n'...`)
        }
    }
    mainMenu();
}

mainMenu();

// let test = new Reminders('Wake up', 'morning');

// console.log(test);