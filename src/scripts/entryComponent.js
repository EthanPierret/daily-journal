const formater = {

    makeJournalEntryComponent: function (journalEntry, id) {
        // Create your own HTML structure for a journal entry

        var workingdiv = document.createElement("div"); // make a sub-wrapper of content, can add classes later!



        workingdiv.innerHTML = `
   <section id="jentry${id}">
   <div class="inline"><h4 id="date${id}">${journalEntry.date}</h4><h4>, </h4><h4 id="concepts${id}">${journalEntry.conceptscovered}</h4></div>
   <p id="entry${id}">${journalEntry.entry}</p>
   <div class="inline"><p>Mood: </p><p id="mood${id}">${journalEntry.moods.name}</p></div>
   <input type="hidden" class="idholder" value="${id}" />
   <button class="removebutton" value="${id}">Delete</button>
   <button class="editbutton" value="${id}">Edit</button>
   <input type="hidden" class="idholder" value="${id}" />
    </section>
   `



        return workingdiv

    }


}

export default formater;