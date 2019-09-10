import rawdatahandler from "./data.js"
import makeJournalEntryComponent from "./entryComponent"
import domeditor from "./entriesDOM"




let data = rawdatahandler;
let form = formater;
let dom = domeditor;
 



/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/


data.getrawdata().then(data => continueloading(data)); // wait for then pass data to continue program




function continueloading(jentries) { // called after the data comes in



console.log(jentries.length);
console.log(jentries);



for (let i = 0; i < jentries.length; i++) { // loop through all entries

    const entryAsHTML = form.makeJournalEntryComponent(jentries[i]); // make a contained div
    console.log(jentries[i])
    dom.parsedentries(entryAsHTML); // append to the dom
}

}
