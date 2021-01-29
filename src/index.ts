

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

    reminderCheck() {
        if (this.toggleComplete == false) {
            console.log(`
            Reminder: ${this.message}   ⬜
            Tag: ${this.tag}
            `)
        } else if (this.toggleComplete == true) {
            console.log(`
            Reminder: ${this.message}   ✅  
            Tag: ${this.tag}
            `)
        }
    }

    // Reminder Modifier -- [boolean switch, msg edit, tag edit]
    msgEdit(msg: string) {
        this.message = msg;
    }

    tagEdit(tag: string) {
        this.tag = tag;
    }

    booleanSwitch(markDone: boolean) {
        if (markDone == true) {
            this.toggleComplete = false;
        } else if (markDone == false) {
            this.toggleComplete = true;
        }
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
            );
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
                mainMenu();
                v = true;
                break;
            // case '2': 
            //     searchReminders();
            //     break;
            case '3':
                newReminder();
                v = true;
                break;
            case '4':
                chooseReminder(reminderArr);
                // chooseReminder(reminderArr);
                v = true;
                break;
            case '5':
            //
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
    if (array.length == 0) {
        console.log('No reminders...');
        mainMenu();
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(`   Reminder [${i + 1}]:`)
            array[i].reminderCheck();
        }
    }
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
        } else if (yesNoCase == 'n') {
            console.log('Reminder deleted');
            v = true;
        }
        else {
            console.log(`Please enter a valid input of either 'y' or 'n'...`);
        }
    }
    mainMenu();
}

// Option [4] -- Choose Reminder
function chooseReminder(array: Reminder[]) {
    let reminder = new Reminder('', '');

    let v = false;
    while (v == false) {
        console.log(`
        Please choose a reminder to modify: 
        `);
        listReminders(array);
        let modReminder = question('Please input the [number] of the reminder you would like to modify: ');
        let modNum = parseInt(modReminder)
        if (modNum <= array.length) {
            reminder = array[modNum - 1];
            v = true;
        } else {
            console.log('Please enter a valid input...');
        }
    }

    console.log(typeof (reminder))
    console.log(`
    ------------------------------
    |      Reminders menu:       |
    ------------------------------
    |  [1] Modify Message 
    |  [2] Modify Tag    
    |  [3] Toggle Complete                        
    ------------------------------
    `);

    let s = false;
    while (s == false) {
        let response = question('Please select a menu option: ');
        switch (response) {
            case '1':
                let newMsg = question('Type a new reminder message: ');
                reminder.msgEdit(newMsg);
                s = true;
                break;
            case '2':
                let newTag = question('Type a new reminder message: ');
                reminder.tagEdit(newTag);
                s = true;
                break;
            case '3':
                reminder.booleanSwitch(reminder.toggleComplete);
                console.log(reminder.toggleComplete);
                s = true;
                break;
            default:
                console.log('Invalid input');
        }
    }
    mainMenu();
}

// Option [5] -- Boolean switcher
function markComplete() {

}


mainMenu();

// let test = new Reminders('Wake up', 'morning');

// console.log(test);