//This module appends a list of contacts to the DOM
//BY taking in the data from contactCollection and iterating over it to create contact components

//Find DOM element to append things to with querySelector
//appends each contact component to that element

import contactCollection from "./contactCollection";
import contact from "./contact";


const contactList = {
  getAndAppendContacts() {
    contactCollection.getContacts()
      .then(aBunchOfContacts => {
        console.log(aBunchOfContacts)
        //take the array in aBunchOfContacts, and call a function (from contact.js) to create dom elements for each object
        aBunchOfContacts.forEach(eachContact => {
         let newDOMthingy = contact.makeDOMcomponentFromObject(eachContact);
         console.log(newDOMthingy)
        })




      })
  }
}

export default contactList;
