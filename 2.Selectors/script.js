/*Add a title attribute to every element that has the important class,
stating This is an important item. 
Tip: adding a title attribute to an element is different from changing the title of a document.*/

// Get all elements with the "important" class
const elements = document.querySelectorAll('.important');

// Iterate through each element and add the title attribute
elements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
 
});

/*Select all the img tags and loop through them.
 If they have no important class, turn their display property to none*/


 // Get all the img tags
 const images = document.getElementsByTagName('img');
 
 // Loop through each image
 for (let i = 0; i < images.length; i++) {
   const image = images[i];
 
   // Check if the image doesn't have the "important" class
   if (!image.classList.contains('important')) {
     image.style.display = 'none';
   }
 }


 /*Loop through all the paragraphs and display their content in the console. 
 If the paragraph has a class, display its classname as well*/
 // Get all the paragraphs
let paragraphs = document.getElementsByTagName('p');

// Loop through each paragraph
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  const className = paragraph.className;

  // Display the content of the paragraph in the console
  console.log('Content:', paragraph.textContent);

  // Check if the paragraph has a class
  if (className) {
    console.log('Class:', className);
  }
}

/*Give each of the paragraph a random text color (different for each one) 
UNLESS it has a class then leave it as it is.*/
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
for (let i = 0; i < paragraphs.length; i++) {
if(!paragraphs[i].classList.length){
    paragraphs[i].style.color=randomBackgroudColor();

}
}



