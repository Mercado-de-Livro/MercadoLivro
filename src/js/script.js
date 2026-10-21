const temaCheckbox = document.getElementById('theme-checkbox');
 
temaCheckbox.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', temaCheckbox.checked);
});