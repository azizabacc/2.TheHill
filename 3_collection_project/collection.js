const collection = [
    {
      name: 'Waffles',
      creator: 'Cyril lignac',
      releaseYear: 2022,
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
      ]
    },
    {
        name: 'Chicken Parmesan',
        creator: 'Gordon Ramsay',
        releaseYear: 2019,
        picture: 'images/chicken_parmesan.jpg',
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
        ]
      },
      {
        name: 'Caprese Salad',
        creator: 'Jamie Oliver',
        releaseYear: 2015,
        picture: 'images/caprese_salad.jpg',
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
        ]
      },
      {
        name: 'Spaghetti Carbonara',
        creator: 'Giada De Laurentiis',
        releaseYear: 2010,
        picture: 'images/spaghetti_carbonara.jpg',
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
        ]
      },
      {
        name: 'Quinoa Salad',
        creator: 'Yotam Ottolenghi',
        releaseYear: 2016,
        picture: 'images/quinoa_salad.jpg',
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
        ]
      },
      {
        name: 'Mojito',
        creator: 'Unknown',
        releaseYear: 'N/A',
        picture: 'images/mojito.jpg',
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
        ]
      }
];
//console.log(collection[0].picture);
module.exports = {collection};