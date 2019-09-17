


const rawdatahandler = {

      getrawdata: function () {


            return fetch("http://localhost:3000/entries?_expand=moods").then(entrieslist => entrieslist.json())



      },

      delete: function (remove) {



            return fetch(`http://localhost:3000/entries/${remove}`, {
                  method: "DELETE"
            })

      },

      getmoods: function () {
            return fetch("http://localhost:3000/moods").then(entrieslist => entrieslist.json())
      }



}

export default rawdatahandler;

