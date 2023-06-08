const _initTime = Date.now()
let section1 = document.querySelector('.displayedsquare-wrapper')
let ul = document.querySelector('main').children[2].children[1]
console.log(ul)
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
/*Everytime the user clicks on one of the action squares
Create a new <div> with a class .displayedsquare 
and the corresponding clicked color in the div above (.displayedsquare-wrapper)*/
const clickOnSquare = (e) => {
  const color = e.target.classList[1]; // Get the clicked color
  const displaySquare = document.createElement('div'); // Create a new div element
  displaySquare.classList.add('displayedsquare', color); // Add classes to the new div
  section1.appendChild(displaySquare); // Append the new div to the displayedsquare-wrapper
  //Create a new <li> in the log below to state when the action was done
  let li =document.createElement('li');
  li.textContent ="["+getElapsedTime()+"] Created a new "+color+" square.";
  ul.appendChild(li);
  console.log("["+getElapsedTime()+"] Created a new "+color+" square.");
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*When the spacebar is hit randomly change the background color of the whole page */
const getRandomInt=(i) =>{
  //generation of a number beteween 0 and i
  return Math.floor(Math.random() * i);
}
const randomBackgroudColor=()=>{
  let r = getRandomInt(255);
  let g = getRandomInt(255);
  let b = getRandomInt(255);
  return 'rgb('+r.toString()+','+g.toString()+','+b.toString()+')';

}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    let backgroundColor =  randomBackgroudColor();
    document.body.style.backgroundColor = backgroundColor;
    let li = document.createElement('li');
    li.textContent = "["+getElapsedTime()+"] Change Background Color to "+backgroundColor+" ."
    ul.appendChild(li);
  }
});
/*When the l key is pressed the log gets deleted (erases the generated <li>s).
 Mind you: using a delete in a for loop might cause issues
  (as the amount of items to loop over changes),
 so a while loop might be a good choice instead. */
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyL') {
    while(ul.children.length!=0){
      ul.lastChild.remove();
    }
    
  }
});
/*When the s key is pressed the squares get deleted (erases the generated squares) */
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyS') {
    while(section1.children.length!=0){
      section1.lastChild.remove();
    }
    
  }
});

/*Create a system so that when a user clicks on a generated square 
an alert pops-up with the color of that square */
const clickOnNewSquare = (e) => {
  const color = e.target.classList[1];
  console.log(getElapsedTime());
  alert(`${color}`);
};

document.querySelector('.displayedsquare-wrapper').addEventListener('click', (e) => {
  if (e.target.classList.contains('displayedsquare')) {
    clickOnNewSquare(e);
  }
});

