// WHAT NOW???

// ADD COMMENTS TO YOUR MODULES TO SAY WHAT THE MODULE IS FOR

// MAKE SURE YOU HAVE AN api/database.json (AND THAT IT IN THE RIGHT PLACE)
// PUT SOME SAMPLE CONTACTS IN IT (MAKE SURE THEY HAVE THE RIGHT PROPERTIES AS REQUIRED BY THE EXERCISE DESCRIPTION)

// WRITE A FETCH CALL TO GET ALL THE CONTACTS FROM YOUR DATABASE
// AND Console.log THEM


//This module contains the API fetch calls to json server that will get the data (and post the data) -- these functions are  to be called by contactList and contactForm components

const APImanager = {
  getContacts () {
    return fetch("http://localhost:8088/contacts")
    .then(function(response) {
      return response.json()
    })



    //other ways of writing the first .then from a fetch call below
    // .then(res => res.json())

    // .then(res => {
    //     return res.json()
    // })

  }
}


export default APImanager;