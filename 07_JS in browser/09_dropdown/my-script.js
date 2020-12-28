window.onload=function() {  

  const selectElement = document.querySelector('.ice-cream');
  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
  }); 
}
