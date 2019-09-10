import rawdatahandler from "./data.js"
import makeJournalEntryComponent from "./entryComponent"
import domeditor from "./entriesDOM"




let data = rawdatahandler;
let form = makeJournalEntryComponent;
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


 function saveJournalEntry(entry) {


    
    console.log("Posting:");
    console.log(data);

    let pastentries = fetch('http://localhost:3000/entries')
    .then(
    
        fetch('http://localhost:3000/entries', { // save to list "entries"
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
                },
        body: pastentries + JSON.stringify(entry) // save the data to file
        })
    ).then(addSingleElement(entry)

       

    );

 }



// add a single element so the entire page does not have to reload every time i add a entry
 function addSingleElement(element) {

    let entryAsHTML = form.makeJournalEntryComponent(element); // make a contained div
    console.log(element);
    dom.parsedentries(entryAsHTML); // append to the dom

 }


 //clears the entries and framework
 function clearEntries() {
    document.querySelector(".entryLog").innerHTML = ``;
 }




function validateForm() {
    if (document.querySelector("#journalDate").value === `undefined`) {

        alert("Must have a Date");

    } else if (document.querySelector("#journalEntry").value === `undefined`) {

        alert("Must have a Entry");

    } else {

        let data =  { // get journal data from html
        
            journalDate : document.querySelector("#journalDate").value,
            concpetsCovered : document.querySelector("#concpetsCovered").value,
            journalEntry : document.querySelector("#journalEntry").value,
            mood : document.querySelector("#mood").value,
        
        
                    
    
                };
            saveJournalEntry(data);

    }
}






//add submit button functionality

document.querySelector('#submit').addEventListener( "click", event => {

    validateForm();
                

}); 

