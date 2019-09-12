


const rawdatahandler = {

getrawdata: function() {
    

   return fetch("http://localhost:3000/entries").then(entrieslist => entrieslist.json())
   
  
   
},

delete: function(remove) {


  
      return fetch(`http://localhost:3000/entries/${remove}`, {
            method: "DELETE"
        })

}



}

export default rawdatahandler;

