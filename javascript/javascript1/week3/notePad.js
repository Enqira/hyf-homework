'use strict'

const notes = []
function saveNote(content, id) {
    const obj = {content, id}
    notes.push(obj)    
}

function getNote(id) {
    for (let i=0; i<notes.length; i++){
        if (notes[i].id === id){
            return (notes[i])
        }
    }
}
function logOutNotesFormatted() {
  for(let i=0; i<notes.length; i++){
    console.log("The note with id: " + notes[i].id + ", has the folowing note text: " + notes[i].content)
  } 
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes)

const firstNote = getNote(1);
console.log(firstNote) // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted();