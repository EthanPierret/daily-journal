const formater = {

makeJournalEntryComponent: function(journalEntry, id) {
    // Create your own HTML structure for a journal entry

    var workingdiv = document.createElement('div'); // make a sub-wrapper of content, can add classes later!

   
   
   workingdiv.innerHTML = `
   <section id="jentry${id}">
   <h4>${journalEntry.date}, ${journalEntry.conceptscovered}</h4>
   <p>${journalEntry.entry}</p>
   <p>Mood: ${journalEntry.mood}</p>
   <input type="hidden" class="idholder" value="${id}" />
   <button class="removebutton" value="${id}">Delete</button>
   <input type="hidden" class="idholder" value="${id}" />
    </section
   `
        


    return workingdiv

}


}

export default formater;