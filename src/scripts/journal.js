let data = rawdatahandler;
let form = formater;
let dom = domeditor;



data.getrawdata(); // start the process while other parts of page load




function continueloading(jentries) { // called after the data comes in

console.log(jentries.length);
console.log(jentries);

for (let i = 0; i < jentries.length; i++) { // loop through all entries

    const entryAsHTML = form.makeJournalEntryComponent(jentries[i]); // make a contained div
    console.log(jentries[i])
    dom.parsedentries(entryAsHTML); // append to the dom
}

}
