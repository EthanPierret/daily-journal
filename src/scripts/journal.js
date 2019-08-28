





const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry

    var workingdiv = document.createElement('div'); // make a sub-wrapper of content, can add classes later!

    workingdiv.appendChild(document.createElement('br'));
    workingdiv.appendChild(document.createElement('br'));
    workingdiv.appendChild(document.createTextNode(journalEntry.date+" "+journalEntry.conceptscovered // date and concepts covered
    +" "));

    workingdiv.appendChild(document.createElement('br'));
    workingdiv.appendChild(document.createTextNode(journalEntry.entry+" ")); // entry
    workingdiv.appendChild(document.createElement('br'));
    workingdiv.appendChild(document.createTextNode("Mood: "+journalEntry.mood+" ")); // mood
        


    return workingdiv
    
    
    
    
    

    
}



fetch("http://localhost:3000/entries")
    .then(entrieslist => entrieslist.json())
    .then(parsedentries => {
        var workingdiv = document.createElement('div');
        document.querySelector(".entryLog").appendChild(workingdiv);
        parsedentries.forEach(entry => {
            const entryAsHTML = makeJournalEntryComponent(entry);
            workingdiv.appendChild(entryAsHTML);
        })
    })


/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/


/*
const renderJournalEntries = (entries) => {

    var workingdiv = document.createElement('div');
    document.querySelector(".entryLog").appendChild(workingdiv);

    for(let i = 0; i <= (journalEntries.length-1); i++) { // loop through all journal entries

        workingdiv.appendChild(makeJournalEntryComponent(journalEntries[i])); // make a entry and append

    }
}

*/


// Invoke the render function
//renderJournalEntries(journalEntries);


