
const rawdatahandler = {

getrawdata: function() {
    

    fetch("http://localhost:3000/entries").then(entrieslist => entrieslist.json())
   .then(parsentries => {
       
       continueloading(parsentries); // all other function after the data comes in
       
   });
  
   
}
}



