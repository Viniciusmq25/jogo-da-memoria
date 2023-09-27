const noteInput = document.getElementById('nick')
const noteForm = document.getElementById('form');
const noteSubmit = document.getElementById('submit')
const notes = document.getElementById("notes");
const jogar = document.querySelector(".jogar")

let notesStorage = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("notes")) 
  : []; 

noteForm.addEventListener('submit', (e) => {
  e.preventDefault()
  notesStorage.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  listBuilder(noteInput.value);

  if(notesStorage.length > 10){
    localStorage.removeItem("notes");
    notes.innerHTML = ''
    notesStorage = [];
  }

  redirecionar()
})

const listBuilder = (text) => {
  const note = document.createElement("li");
  note.innerHTML = text
  notes.appendChild(note);
};

const getNotes = JSON.parse(localStorage.getItem("notes"));
  getNotes.forEach((note) => {
  listBuilder(note);
  });

function redirecionar(){
  window.location.href = "https://jogo-da-memoria-wine-gamma.vercel.app/jogar.html"
}