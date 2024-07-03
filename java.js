
  const checklist = document.getElementById('checklist');
  const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
  const endClassButton = document.getElementById('end-class');

  endClassButton.addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  });
