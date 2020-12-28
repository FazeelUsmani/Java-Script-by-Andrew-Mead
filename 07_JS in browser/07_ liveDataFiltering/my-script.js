window.onload=function() {  
  
  const log = document.getElementById('values');
  
  document.querySelector('.input-label').addEventListener('input', updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  }  
}
