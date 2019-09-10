const formater = {

makeJournalEntryComponent: function(journalEntry) {
    // Create your own HTML structure for a journal entry

    var workingdiv = document.createElement('div'); // make a sub-wrapper of content, can add classes later!

   
   
   workingdiv.innerHTML = `
   <section>
   <h4>${journalEntry.date}, ${journalEntry.conceptscovered}</h4>
   <p>${journalEntry.entry}</p>
   <p>Mood: ${journalEntry.mood}</p>
    </section
   `
        


    return workingdiv

}


}

export default makeJournalEntryComponent;