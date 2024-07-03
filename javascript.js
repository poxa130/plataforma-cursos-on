// Obtenha todos os checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Adicione um ouvinte de eventos a cada checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Marque a tarefa como concluída
      console.log('Tarefa concluída!');
    } else {
      // Marque a tarefa como incompleta
      console.log('Tarefa incompleta!');
    }
  });
});

// Defina um timer para expirar em 1 hora
var timer = setTimeout(function() {
    // Obtenha o checkbox
    var checkbox = document.getElementById('item1');
  
    // Marque a tarefa como concluída
    checkbox.checked = true;
  }, 3600000); // 1 hora em milissegundos