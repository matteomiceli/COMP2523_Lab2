// Imports
import { question } from 'readline-sync';

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

class Reminder {
    message: string;
    tag: string;
    toggelComplete: boolean;
}