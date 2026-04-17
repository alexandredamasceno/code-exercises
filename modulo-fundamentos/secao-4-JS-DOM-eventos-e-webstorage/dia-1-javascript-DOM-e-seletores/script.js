console.log(document.getElementsByTagName('body'));
document.querySelector('#header-container').style.backgroundColor =
  'rgb(0, 176, 105)';
document.querySelector('.emergency-tasks').style.backgroundColor =
  'rgb(255, 159, 132)';
document.querySelector('.emergency-tasks div h3').style.backgroundColor =
  'rgb(165, 0, 243)';
document.querySelector('.emergency-tasks div h3').style.color = 'white';
document.querySelectorAll('.emergency-tasks div h3')[1].style.backgroundColor =
  'rgb(165, 0, 243)';
document.querySelectorAll('.emergency-tasks div h3')[1].style.color = 'white';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor =
  'rgb(249, 219, 94)';
document
  .getElementsByClassName('no-emergency-tasks')[0]
  .getElementsByTagName('div')[0]
  .getElementsByTagName('h3')[0].style.backgroundColor = 'rgb(35, 37, 37)';
document
  .getElementsByClassName('no-emergency-tasks')[0]
  .getElementsByTagName('div')[0]
  .getElementsByTagName('h3')[0].style.color = 'white';
document
  .getElementsByClassName('no-emergency-tasks')[0]
  .getElementsByTagName('div')[1]
  .getElementsByTagName('h3')[0].style.backgroundColor = 'rgb(35, 37, 37)';
document
  .getElementsByClassName('no-emergency-tasks')[0]
  .getElementsByTagName('div')[1]
  .getElementsByTagName('h3')[0].style.color = 'white';
document.getElementById('footer-container').style.backgroundColor =
  'rgb(0, 53, 51)';
