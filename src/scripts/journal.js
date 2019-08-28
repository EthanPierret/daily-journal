

const journalEntries = [

{
    date : "8.16.19",
    conceptscovered : "HTML and CSS",
    entry : "This class moves fast, already were doing advanced styling with somthing similar to float: flexbox",
    mood : "Great",



},

{
    date : "8.24.19",
    conceptscovered : "Website presentation",
    entry : "Did not get my website to it's best, probally becuase i was preoccupied helping others",
    mood : "Sad",



},

{
    date : "8.26.19",
    conceptscovered : "JavaScript",
    entry : "Javascript can do either primitive or advanced varaibles",
    mood : "Good",



},




];

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




/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {

    var workingdiv = document.createElement('div');
    document.querySelector(".entryLog").appendChild(workingdiv);

    for(let i = 0; i <= (journalEntries.length-1); i++) { // loop through all journal entries

        workingdiv.appendChild(makeJournalEntryComponent(journalEntries[i])); // make a entry and append

    }
}

// Invoke the render function
renderJournalEntries(journalEntries);


