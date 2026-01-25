// Traducciones al español para Minimal Mistakes
document.addEventListener('DOMContentLoaded', function() {
  // Cambiar "On this page" por "En esta página"
  var tocTitle = document.querySelector('.nav__title');
  if (tocTitle && tocTitle.textContent.trim() === 'On this page') {
    tocTitle.innerHTML = '<i class="fas fa-file-alt"></i> En esta página';
  }
  
  // Cambiar "You May Also Enjoy" por "Puede que también te interese"
  var relatedTitle = document.querySelector('.page__related-title');
  if (relatedTitle && relatedTitle.textContent.trim() === 'You May Also Enjoy') {
    relatedTitle.textContent = 'Puede que también te interese';
  }
});
