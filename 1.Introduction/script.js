//Display the document title in the console
console.log(document.title);

//Change the document title to Modifying the DOM
document.title = "The DOM is a powerful tool!";
console.log(document.title);

//Change the background color of the body to hot pink (#FF69B4). 
document.body.style.backgroundColor="#FF69B4";

//try with a random color as an extra challenge. 
//(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255
function getRandomInt(i) {
    //generation of a number beteween 0 and i
    return Math.floor(Math.random() * i);
  }
function randomBackgroudColor(){
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    return 'rgb('+r.toString()+','+g.toString()+','+b.toString()+')';

}
document.body.style.backgroundColor=randomBackgroudColor();

//Using the children method and a for ... of  loop, 
//display every children elements of the second child element of your document 
//(display all children elements of the <body>)
let bodyChildren = document.body.children;
for(let i=0; i<bodyChildren.length ; i++){
    console.log(bodyChildren[i]);
}

