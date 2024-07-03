const notesTextarea = document.getElementById('notes-textarea');
  const saveNotesButton = document.getElementById('save-notes');
  const notesSavedParagraph = document.getElementById('notes-saved');

  saveNotesButton.addEventListener('click', () => {
    const notesText = notesTextarea.value;
    localStorage.setItem('notes', notesText);
    notesSavedParagraph.style.display = 'block';
  });

  // Carregar anotações salvas
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }