let ul = document.querySelector("ul");
let ulChildNodes = ul.childNodes;
console.log(ulChildNodes);

for(let i=0;i<ulChildNodes.length;i++){
    console.log(ulChildNodes[i].nodeType);
    if(ulChildNodes[i].nodeType===1){
        console.log("index : " ,i);
        if((ulChildNodes[i].textContent=="Fast and Furious") && (i>0)){
            console.log(ulChildNodes[i].textContent+" at index "+i);
            //Since Fast and Furious is the most important franchise ever, add a class .important to the element
            ulChildNodes[i].className ="important";
            ul.prepend(ulChildNodes[i]);
        }
    }else{
        ul.removeChild(ulChildNodes[i]);
    }
}
let lichildren = ul.childNodes
console.log(ul.childNodes);
//Add an eventListener on every item of the list. 
//If the item is clicked an alert() pops up to display the name of clicked element
for(let i=0;i<lichildren.length;i++){
    lichildren[i].addEventListener("click", ()=> {
    if(i==0){
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."); }
    else{ 
        console.log(lichildren[i]);
        alert(lichildren[i].textContent);}
   
    
});}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  ///////// NOT FINISHED ///////////
document.body.addEventListener("keyup",  (e)=> {
    if(e.code =="KeyR"){
        shuffleArray(lichildren);

    }
    
} );