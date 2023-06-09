let ul = document.querySelector("ul");
let ulChildNodes = ul.children;
console.log(ulChildNodes[1].nodeType);

for(let i=0;i<ulChildNodes.length;i++){
    console.log("loop for"+ulChildNodes[i].nodeType);
    if(ulChildNodes[i].nodeType===1){
        console.log("aaaaaaaaaaaa")
        console.log("index : " ,i);
        if((ulChildNodes[i].textContent=="Fast and Furious") && (i>0)){

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



 // sorted in a random order, however Fast and Furious should remain the first element (
document.body.addEventListener("keyup",  (e)=> {
    if(e.code =="KeyR"){
        console.log(ul.children);
        for (var i = ul.children.length; i > 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
            let importantLi = ul.querySelector(".important");

            if (importantLi) {
              ul.prepend(importantLi);
            }
        }

    }
    
} );
