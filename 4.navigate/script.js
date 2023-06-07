/*Select the last child of the <ol> tag
 and put it at the beginning of the list*/

// Get the <ol> element
const ol = document.querySelector('ol');
// Get the last child of the <ol> element
const lastChild = ol.lastElementChild;
// Move the last child to the beginning of the list
ol.prepend(lastChild);

/*Move the <h2> of the third section in the second one
 and vice-versa */

 let main = document.querySelector('main');
let section3 = main.children[2].children[0];
let section2 = main.children[1];

// Get the <h2> elements within the sections
let h2Section3 = section3.firstChild;
let h2Section2 = section2.firstChild;

// Swap the <h2> elements between the sections
section3.prepend(h2Section2);
section2.prepend(h2Section3);

/*Delete the last section from the DOM, we don't need it anyways*/ 
let lastSection = main.children[2];
lastSection.remove();
