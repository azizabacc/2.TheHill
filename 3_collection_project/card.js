
const collection = [
    {
      name: 'Waffles',
      creator: 'Cyril lignac',
      time: "45 m",
      picture: 'images/waffles.jpeg',
      genre: ['Dessert', 'Breakfast'],
      quantity : 6,
      ingredients: [["flour" , 600 ,"g"],["sugar" , 100 ,"g"],["eggs" , 100 ,""],["milk" , 100 ,"ml"],
      ["butter" , 150 ,"g"],["yeast" , 15 ,"g"]],
      instructions : [
        "Mix flour, sugar, salt, and yeast in a bowl.",
        "Add eggs, milk, and melted butter. Mix well until you get a smooth batter.",
        "Let the batter rest for 30 minutes.",
        "Heat the waffle iron and pour a ladle of batter into each mold.",
        "Cook the waffles until they are golden and crispy.",
        "Serve hot with maple syrup, powdered sugar, or fruits."
      ],
      bio :"Delicious homemade waffles with a light batter, served with your favorite toppings."
    },
    {
        name: 'Chicken Parmesan',
        creator: 'Gordon Ramsay',
        time: "60 m",
        picture: 'images/parmesana.jpg',
        genre: ['Dinner'],
        quantity: 4,
        ingredients: [
          ['boneless chicken breasts', 4, ''],
          ['bread crumbs', 1, 'cup'],
          ['Parmesan cheese', 1, 'cup'],
          ['eggs', 2, ''],
          ['all-purpose flour', 1/2, 'cup'],
          ['olive oil', 1/4, 'cup'],
          ['marinara sauce', 2, 'cups'],
          ['mozzarella cheese', 1, 'cup'],
          ['fresh basil leaves', 'to taste', '']
        ],
        instructions: [
          'Preheat the oven to 400°F (200°C).',
          'In three separate bowls, place flour, beaten eggs, and a mixture of bread crumbs and Parmesan cheese.',
          'Coat each chicken breast in flour, dip it into the beaten eggs, and then coat it with the bread crumb and Parmesan mixture.',
          'Heat olive oil in a large skillet over medium heat. Add the coated chicken breasts and cook until golden brown on each side.',
          'Transfer the chicken breasts to a baking dish and top each piece with marinara sauce, mozzarella cheese, and fresh basil leaves.',
          'Bake in the preheated oven for 20-25 minutes or until the chicken is cooked through and the cheese is melted and bubbly.',
          'Serve hot with pasta or a side salad.'
        ],
        bio : "A classic Italian dish featuring breaded chicken cutlets topped with marinara sauce and melted mozzarella cheese."
      },
      {
        name: 'Caprese Salad',
        creator: 'Jamie Oliver',
        time: "15 m",
        picture: 'images/caprese.jpg',
        genre: ['Appetizer', 'Salad'],
        quantity: 2,
        ingredients: [
          ['ripe tomatoes', 4, ''],
          ['fresh mozzarella cheese', 8, 'ounces'],
          ['fresh basil leaves', 'to taste', ''],
          ['extra virgin olive oil', 'to taste', ''],
          ['balsamic vinegar', 'to taste', ''],
          ['salt', 'to taste', ''],
          ['black pepper', 'to taste', '']
        ],
        instructions: [
          'Slice the tomatoes and fresh mozzarella cheese into ¼-inch thick slices.',
          'Arrange the tomato and mozzarella slices on a serving platter, alternating between the two.',
          'Tuck fresh basil leaves between the tomato and mozzarella slices.',
          'Drizzle extra virgin olive oil and balsamic vinegar over the salad.',
          'Season with salt and black pepper to taste.',
          'Let the salad sit for a few minutes to allow the flavors to meld together.',
          'Serve as an appetizer or a refreshing side dish.'
        ],
        bio : "A refreshing salad made with ripe tomatoes, fresh mozzarella cheese, basil leaves, extra virgin olive oil, balsamic vinegar, salt, and pepper."
      },
      {
        name: 'Spaghetti Carbonara',
        creator: 'Giada De Laurentiis',
        time: "20 m",
        picture: 'images/carbonara.jpg',
        genre: ['Dinner'],
        quantity: 4,
        ingredients: [
          ['spaghetti', 8, 'ounces'],
          ['pancetta or bacon', 4, 'ounces'],
          ['garlic cloves', 2, 'minced'],
          ['eggs', 2, ''],
          ['Parmesan cheese', 1/2, 'cup'],
          ['black pepper', 'to taste', ''],
          ['salt', 'to taste', ''],
          ['fresh parsley leaves', 'for garnish', '']
        ],
        instructions: [
          'Cook the spaghetti according to the package instructions until al dente. Drain and set aside.',
          'In a large skillet, cook the pancetta or bacon until crispy. Remove from the skillet and set aside.',
          'In the same skillet, add minced garlic and cook for a minute until fragrant.',
          'In a bowl, whisk together eggs, Parmesan cheese, salt, and black pepper.',
          'Add the cooked spaghetti to the skillet with garlic and toss to coat.',
          'Remove the skillet from heat and quickly pour in the egg mixture, stirring constantly to coat the spaghetti.',
          'Crumble the cooked pancetta or bacon and sprinkle it over the spaghetti.',
          'Garnish with fresh parsley leaves and serve hot.'
        ],
        bio : "Spaghetti carbonara prepared with crispy pancetta or bacon, mced garlic, eggs, Parmesan cheese, black pepper, and garnished with fresh parsley leaves."
      },
      {
        name: 'Quinoa Salad',
        creator: 'Yotam Ottolenghi',
        time: "45 m",
        picture: 'images/Quinoa_Salad.jpg',
        genre: ['Salad', 'Healthy'],
        quantity: 4,
        ingredients: [
          ['quinoa', 1, 'cup'],
          ['cucumber', 1, 'diced'],
          ['cherry tomatoes', 1/2, 'cup halved'],
          ['red bell pepper', 1, 'diced'],
          ['red onion', 1/4, 'cup finely chopped'],
          ['fresh parsley leaves', 1/4, 'cup chopped'],
          ['fresh mint leaves', 1/4, 'cup chopped'],
          ['lemon juice', 2, 'tablespoons'],
          ['extra virgin olive oil', 2, 'tablespoons'],
          ['salt', 'to taste', ''],
          ['black pepper', 'to taste', '']
        ],
        instructions: [
          'Rinse the quinoa under cold water and cook it according to the package instructions. Let it cool.',
          'In a large bowl, combine the cooked quinoa, cucumber, cherry tomatoes, red bell pepper, red onion, parsley, and mint leaves.',
          'In a small bowl, whisk together lemon juice, extra virgin olive oil, salt, and black pepper to make the dressing.',
          'Pour the dressing over the quinoa salad and toss to coat evenly.',
          'Taste and adjust the seasoning if needed.',
          'Chill the salad in the refrigerator for at least 30 minutes before serving.',
          'Serve cold as a refreshing and nutritious salad.'
        ],
        bio : "A nutritious salad made with quinoa, diced cucumber, halved cherry tomatoes, diced red bell pepper, finely chopped red onion, fresh parsley leaves, fresh mint leaves, lemon juice, extra virgin olive oil, salt, and pepper."
      },
      {
        name: 'Mojito',
        creator: 'Unknown',
        time: "7 m",
        picture: 'images/mojito.jpeg',
        genre: ['Beverage', 'Cocktail'],
        quantity: 1,
        ingredients: [
          ['fresh mint leaves', 8-10, ''],
          ['lime', 1, 'cut into wedges'],
          ['granulated sugar', 2, 'tablespoons'],
          ['white rum', 2, 'ounces'],
          ['club soda', 'to taste', ''],
          ['ice cubes', 'as needed', '']
        ],
        instructions: [
          'In a tall glass, muddle the mint leaves and lime wedges together with the sugar until the mint releases its aroma.',
          'Fill the glass with ice cubes.',
          'Pour the white rum over the ice.',
          'Top off the glass with club soda.',
          'Stir gently to combine all the ingredients.',
          'Garnish with a sprig of fresh mint leaves and a lime wedge.',
          'Serve immediately and enjoy this refreshing cocktail.'
        ],
        bio : " A refreshing cocktail made with fresh mint leaves, lime wedges, granulated sugar, white rum, club soda, and ice cubes."
      }
];
const jsonData = JSON.stringify(collection, null, 2);
const blob = new Blob([jsonData], { type: 'application/json' });
const url = URL.createObjectURL(blob);

const link = document.createElement('a');
link.href = url;
link.download = 'collection.json';
link.click();


const showRecipe = (recipe) => {
  // Create popup
  const popup = window.open("", "Recipe", "width=600,height=400");

  // fill the popup
  const recipeContent = `
    <style>
    body {
      margin : 0 ;
      padding :0 ;
    }
      .popup {
        background-color : white;
        padding :50px ;
  
      }
      header{
        display : flex ;
      }
      h1{
        color : red;
      
      }
      h3 {
        color : red ;
       

      }
      .headpopup{
        display : flex;
        justify-content: space-around;
        
      }
      .headpopup p {
        text-align: center;
          background-color: pink;
        border-radius: 10px;
        color: black;
        padding: 5px;
        font-size: 15px;
        margin: 0px;
        text-align: center;

      }
    </style>
   
    <div class="popup">
    <header>
      <div class="popupTitle">
      <h1>${recipe.name}</h1>
      <h3>${recipe.creator}</h3>
      </div>
    <img src=${recipe.picture} alt="Recipe image">
    </header>
    <div class="headpopup">
      <p>${recipe.quantity}<br>persons</p>
      <p>${recipe.time}<br>Time</p>
    </div>
    <h2>Ingredients:</h2>
    <ul>
      ${recipe.ingredients.map((ingredient) => `<li>${ingredient[0]} : ${ingredient[1]} ${ingredient[2]}</li>`).join("")}
    </ul>
    <h2>Instructions:</h2>
    <ol>
      ${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
    </ol>
    </div>
  `;

  // affect popup to body
  popup.document.body.innerHTML = recipeContent;
};

const displayFlex=(node,flexDirection,alignItems,justifyContent,width)=>{
  node.style.display="flex";
  node.style.flexDirection =flexDirection;
  node.style.alignItems =alignItems;
  node.style.justifyContent =justifyContent;
  node.style.width =width;
}
const textCostom = (node, content, size,textAlign, color, backgroundColor,padding,margin, borderRadius)=> {
  node.innerHTML=content;
  node.style.backgroundColor =backgroundColor;
  node.style.borderRadius =borderRadius;
  node.style.color =color;
  node.style.padding =padding;
  node.style.fontSize =size;
  node.style.margin =margin;
  node.style.textAlign =textAlign;
}
document.body.style.margin ="0";
document.body.style.padding ="0";
let container= document.getElementsByClassName("container");
//container[0].style.backgroundColor = "#F6F0ED";
container[0].style.background = " rgb(187,177,147)"
container[0].style.background = " radial-gradient(circle, rgba(187,177,147,1) 0%, rgba(246,240,237,1) 35%, rgba(126,168,190,1) 100%)"
const generateCard = () =>{
  
  for(let j=0; j<collection.length ;j++){

let headDesc = document.createElement("div");
headDesc.className = "head-desc";
let recipeBtn = document.createElement("p");
recipeBtn.className = "recipe-btn";
let category1 = document.createElement("div");
category1.className = "category";
let category2 = document.createElement("div");
category2.className = "category";
let recipeTime = document.createElement("p");
recipeTime.className = "resume";
let ingredientNb = document.createElement("p");
ingredientNb.className = "resume";
let serving = document.createElement("p");
serving.className = "resume";
let title = document.createElement("div");
title.className = "title";
let recipeName = document.createElement("p");
recipeName.className = "recipe-name";
let recipeCreator = document.createElement("p");
recipeCreator.className = "recipe-creator";
let img = document.createElement("img");
img.className = "recipe-image";
let card = document.createElement("div");
card.className = "card";
let recipeBio = document.createElement("p");
recipeBio.className = "recipe-bio";

textCostom(recipeBtn,"VIEW RECIPE","20px","center","white","#64970a","10px","10","10px");
displayFlex(headDesc,"column","center","center","inherit");
textCostom(recipeTime,collection[j].time+"<br>Time","15px","center","rgb(246, 240, 237)","#7EA8BE","5px","5px","10px");
textCostom(ingredientNb,collection[j].ingredients.length+"<br>Ingredients","15px","center","rgb(246, 240, 237)","#7EA8BE","5px","5px","10px");
textCostom(serving,collection[j].quantity+"<br>Serving","15px","center","rgb(246, 240, 237)","#7EA8BE","5px","5px","10px");
for(let i=0;i<collection[j].genre.length;i++){
    let g = document.createElement("p");
    textCostom(g, collection[j].genre[i],"15px","center","rgb(246, 240, 237)","#C2948A","5px","5px","10px");
    category1.appendChild(g);
}
textCostom(recipeName,collection[j].name,"40px","center","#28536B","white","0px","0",'0px' );
textCostom(recipeCreator,collection[j].creator,"30px","center","#28536B","white","0px","0",'0px' );
textCostom(recipeBio,collection[j].bio,"20px","left","black","white"," 20px 10px ","0","10px");

recipeName.style.width ="inherit";
recipeCreator.style.width="inherit";
category1.style.padding= "10px";

title.style.backgroundColor ='white';
title.style.padding ="10px";
title.style.borderRadius ="10px";
title.style.marginBottom ="10px";
category2.style.padding= "10px";
img.src = collection[j].picture;
img.style.width = "inherit";
img.style.height ="auto";

//card.style.backgroundColor = "#BBB193";
card.style.background = "background: rgb(126,168,190)";
card.style.background = "radial-gradient(circle, rgba(126,168,190,1) 0%, rgba(246,240,237,1) 0%, rgba(40,83,107,1) 100%)";
card.style.border = "5px solid #F6F0ED";
card.style.borderRadius ="10px";
card.style.padding="30px";
card.style.margin= "20px";
card.style.height ="714px";



displayFlex(category2,"row","center","space-evenly","inherit");
displayFlex(category1,"row","center","space-evenly","inherit");
displayFlex(title,"column","flex-start","space-between","inherit")
displayFlex(card,"column","center","space-between","290px");


category2.appendChild(ingredientNb);
category2.appendChild(recipeTime);
category2.appendChild(serving);
title.appendChild(recipeName);
title.appendChild(recipeCreator);
card.appendChild(img);
headDesc.appendChild(category1);
headDesc.appendChild(category2);
let descriptionContainer = document.createElement('div');
descriptionContainer.style.display='flex';
descriptionContainer.style.flexDirection="column";
descriptionContainer.appendChild(headDesc);
descriptionContainer.appendChild(title);
descriptionContainer.appendChild(recipeBio);
descriptionContainer.appendChild(recipeBtn);
card.appendChild(descriptionContainer);
container[0].appendChild(card);

recipeBtn.addEventListener("click", function() {
  showRecipe(collection[j]);
});
recipeBtn.addEventListener("mouseover", function() {
  recipeBtn.style.cursor = "pointer";
});

recipeBtn.addEventListener("mouseout", function() {
  recipeBtn.style.cursor = "default";
});
  }
}
function myFunction(x) {
  if (x.matches) { // If media query matches
    displayFlex(container[0],"column", "center", "center", "auto");
  } else {
    displayFlex(container[0],"row", "center", "center", "auto");
    container[0].style.flexFlow = "row wrap";

  }
}

var x = window.matchMedia("(max-width: 420px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
generateCard();