function saveNote() {
  const text = document.getElementById('noteText').value;

  const note = {
    text: text,
    date: new Date().toISOString(),
  };

  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.push(note);

  localStorage.setItem('notes', JSON.stringify(notes));

  document.getElementById('noteText').value = '';

  displayNotes();
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  const notesContainer = document.getElementById('notesContainer');

  notesContainer.innerHTML = '';

  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    noteElement.innerHTML = `
                    <p>${note.text}</p>
                    <small>${new Date(note.date).toLocaleString()}</small>
                    <button class="delete-button" onclick="deleteNote(${index})">Delete</button>
                     <button class="edit-button" (${index})">Edit</button>
                `;
    notesContainer.appendChild(noteElement);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.splice(index, 1);

  localStorage.setItem('notes', JSON.stringify(notes));

  displayNotes();
}

function editNote(index) {}

displayNotes();
