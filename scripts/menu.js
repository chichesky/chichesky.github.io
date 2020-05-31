function openMenu() {
  //Remove other class
  btn.classList.remove('moveBackButton');
  arrow.classList.remove('turnBackArrow');
  smallMenu.classList.remove('menuDown');

  //Add new class
  document.body.appendChild(moveButton);
  document.body.appendChild(turnArrow);
  document.body.appendChild(menuUp);
  btn.classList.add('moveButton');
  arrow.classList.add('turnArrow');
  smallMenu.classList.add('menuUp');

  //Change listener
  btn.removeEventListener('click',openMenu);
  btn.addEventListener('click',closeMenu);
}

function closeMenu() {
  //Remove other class
  btn.classList.remove('moveButton');
  arrow.classList.remove('turnArrow');
  smallMenu.classList.remove('menuUp');

  //Add new class
  document.body.appendChild(moveBackButton);
  document.body.appendChild(turnBackArrow);
  document.body.appendChild(menuDown);
  btn.classList.add('moveBackButton');
  arrow.classList.add('turnBackArrow');
  smallMenu.classList.add('menuDown');


  //Change listener
  btn.removeEventListener('click',closeMenu);
  btn.addEventListener('click',openMenu);
}





const moveButton = document.createElement('style');
const moveBackButton = document.createElement('style');
const turnArrow = document.createElement('style');
const turnBackArrow = document.createElement('style');
const menuUp = document.createElement('style');
const menuDown = document.createElement('style');


moveButton.innerHTML = ".menuButton{right: 1.5vw; bottom: 1.5vh;}.moveButton {animation: moveButton 2s 1; animation-fill-mode: forwards;}";
moveBackButton.innerHTML = ".menuButton{right: 85vw; bottom: 85vh;}.moveBackButton {animation: moveBackButton 2s 1; animation-fill-mode: forwards;}";
turnArrow.innerHTML = ".Arrow{transform: rotate(0deg);}.turnArrow{animation: turnArrow 2s 1; animation-fill-mode: forwards;}"
turnBackArrow.innerHTML = ".Arrow{transform: rotate(180deg);}.turnBackArrow{animation: turnBackArrow 2s 1; animation-fill-mode: forwards;}"
menuUp.innerHTML = ".smallMenu{top: 100vh;left:100vw;}.menuUp { animation: menuUp 2s 1;animation-fill-mode: forwards;}"
menuDown.innerHTML = ".smallMenu{top: 10vh;left:10vw;}.menuDown { animation: menuDown 2s 1;animation-fill-mode: forwards;}"

moveButton.setAttribute("id","moveButton");
moveBackButton.setAttribute("id","moveBackButton");
turnArrow.setAttribute("id","turnArrow");
turnBackArrow.setAttribute("id","turnBackArrow");
menuUp.setAttribute("id","menuUp");
menuDown.setAttribute("id","menuDown");

const arrow = document.getElementById("Arrow");
const smallMenu = document.getElementById("smallMenu");
const btn = document.querySelector('.menuButton');
btn.addEventListener('click',openMenu);
