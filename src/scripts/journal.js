import rawdatahandler from "./data.js";
import makeJournalEntryComponent from "./entryComponent.js";
import domeditor from "./entriesDOM.js";





let data = rawdatahandler;
let form = makeJournalEntryComponent;
let dom = domeditor;
 



/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/



data.getrawdata().then(data => continueloading(data)); // wait for then pass data to continue program

let deletedid = null; // id of last deleted item, program seems to be loading new results before waiting for the deltetion, i think its a database problem.


function continueloading(jentries) { // called after the data comes in


console.log("Sorting these:");
console.log(jentries);
console.log(jentries.length);
clearEntries();





for (let i = 0; i < jentries.length; i++) { // loop through all entries


    if ( jentries[i].id != deletedid) {

    const entryAsHTML = form.makeJournalEntryComponent(jentries[i],jentries[i].id); // make a contained div
    console.log(jentries[i])
    dom.parsedentries(entryAsHTML); // append to the dom
    }


}

let buttons = document.querySelectorAll(".removebutton");

for (let i = 0; i < buttons.length; i++) { // loop through all entries

    
    buttons[i].addEventListener("click", event => {
        console.log("Deleting: ");
        console.log(buttons[i].value);
        
        

        data.delete(buttons[i].value.toString()).then(data.getrawdata().then(data => continueloading(data)));
        deletedid = buttons[i].value;
        
    })

}


}


 function saveJournalEntry(entry) {


   

        fetch(`http://localhost:3000/entries`).then
        
        fetch('http://localhost:3000/entries', { // save to list "entries"
        method: 'POST',
        headers: {
          //'Accept': 'application/json',
          'Content-Type': 'application/json'
                },
        body: JSON.stringify(entry) // save the data to file
    }).then(data.getrawdata().then(data => continueloading(data)));

    

 }





 //clears the entries and framework
 function clearEntries() {
    document.querySelector(".entryLog").innerHTML = ``;
 }



// another fancy way of saying on load
 window.addEventListener("load",function() {
    document.getElementById('journal-form').addEventListener("submit",function(e) {
      e.preventDefault(); // before the code
      
        validateForm();
      
    });
  });

  window.addEventListener("load",function() {
    document.getElementById('search-form').addEventListener("submit",function(e) {
      e.preventDefault(); // before the code
      
        loadsearch();
      
    });
  });



function loadsearch() {

document.querySelector("#searchsubmit").addEventListener("click", event => {
    const searchfor = document.querySelector("#searchbar").value;

   
    console.log("Searching keyword: " + searchfor);

    data.getrawdata().then( data => sortdata(data, searchfor.toLowerCase()));

        

    

})

}


function sortdata (target, searchvar) {

    let workinglist = [];


    target.forEach(datapeice => {

        let add = false;


        // Iterate all of the values of the current datapeice
        for (const value of Object.values(datapeice)) {

            let teststring = value.toString().toLowerCase();
            if(teststring.includes(searchvar)) {
                add = true;
            }
            console.log(searchvar);

        }

        if (add == true) {
            workinglist.push(datapeice);
            console.log("pushing");
            console.log(datapeice);
        }

    })


     continueloading(workinglist);

}





function validateForm() {

        console.log("Preparing to submit");
        
    
        let data =  { // get journal data from html
        
            date : document.querySelector("#journalDate").value,
            conceptscovered : document.querySelector("#concpetsCovered").value,
            entry : document.querySelector("#journalEntry").value,
            mood : document.querySelector("#mood").value,
        
    
                };

            saveJournalEntry(data);
            console.log("Saving:");
            console.log(data);

    }


   


let searchoptions = document.querySelectorAll(".sortbutton");

for (let i=0; i < searchoptions.length; i++) {

    searchoptions[i].addEventListener("click", event => {
        const mood = event.target.value;

       
        console.log("Searching mood: " + mood);

        data.getrawdata().then(data => continueloading(data.filter(target => target.mood.toLowerCase() == mood)));

    })

}
