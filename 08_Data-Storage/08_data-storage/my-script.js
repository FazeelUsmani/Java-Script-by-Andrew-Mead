window.onload=function() {  
  

  const date = moment();
  const timestamp = 1488387600000;
  const date = moment(timestamp);

  console.log('Helloiajsdofij ');
  <a href="index.html">Click to go to index page</a>

  localStorage.setItem('username', 'Fazeel');

  const name = localStorage.getItem('username');
  console.log(name);

  const root = document.createElement('div');
  const text = document.createElement('span');
  const button = document.createElement('button');

  text.textContent = 'Hello world ';
  root.appendChild(text);

  button.textContent = ' close';
  root.appendChild(button);

  const uid = document.createElement('p');
  const id = uuidv4();
  const utext= ('The randomly generated id is '+ id);
  uid.textContent = utext;
  console.log(uid);
  root.appendChild(uid);
  
  document.body.appendChild(root);
}
