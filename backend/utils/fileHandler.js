// This file handles reading and writing to the db.json file — just raw file operations.
// Responsibilities:

// Read JSON from the file
// Write JSON back to the file
// Possibly wrap them in helper functions like readNotes() and saveNotes()
// It does not know about notes or how they are used — it just helps the controller talk to the JSON file.


// import fs from "fs";
import fs from 'node:fs/promises';


async function readFile(){
     try {
        const data = await fs.readFile('backend\data\db.json', { encoding: 'utf8' });
       
        console.log("the data is", data);
    } catch (err) {
        console.error(err);
    }
}

readFile();


// async function writeToFile(){
//   try {
//     const content = 'Some content!';
//     await fs.appendFile('backend\data\db.json', content);
//   } catch (err) {
//     console.log(err);
//   }
// }
// writeToFile();