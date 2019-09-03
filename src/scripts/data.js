
const rawdatahandler = {

getrawdata: function() {
    

   return fetch("http://localhost:3000/entries").then(entrieslist => entrieslist.json())
   
  
   
}
}



