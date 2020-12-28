window.onload=function() {  
  document.querySelector('#delivery').addEventListener('change', function (e) {
    console.log(document.querySelector('#delivery').textContent+ " content");
    console.log(e.target.checked);
    if (e.target.checked) {      
      console.log("In checked");
      const text = "You've clicked!";
      document.querySelector('#delivery').textContent = text;
    }
  })
}
