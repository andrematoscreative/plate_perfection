import { images } from '../../constants';

const productData = [
    {
        name: "Spicy Goulash",
        id: 1,
        category: "Meat",
        image: `${images.plate1}`,
        description: "Our modern spiced version of the hungarian stew",
        body: '"Our dish is based on the ancient recipe with slow cooked beef, the basics main ingredients (paprika, onions, potatoes, vegetables and their broth) with our incredible sauce, made with artisanal stout beer, peppers, sour cream and our secret spices mix. A perfect chemistry between the intense flavours of an old goulash with a modern spiced up twist that will bring extreme delight to your table."',
        price: "€ 55,99",
        extras: [
            {
                name: "Extra Green Beans",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Hot Spices",
                price: "€ 3.99",
                id: 2,
            },
            {
                name: "Extra Cast iron baked bread",
                price: "€ 2.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Green Beans",
            Ingredient2 : "+ Extra Hot spices",
            Ingredient3 : "+ Cast iron baked bread",
        }]
    },
    {
        name: "Premium Angus Hamburger",
        id: 2,
        category: "Meat",
        image: `${images.plate2}`,
        description: "Our bold and exquisite Angus burger",
        body: '"Black Angus meat is one of the most flavorsome bovine meats. It’s moist and tenderness provide a delicious experience in addition to great seasoning and cooking techniques to make this burger a masterpiece. Served between two slices of soft toasted buns, the two Angus burgers (200g) have two different sauces (mustard and curry), two types of cheese: American and Monterey Jack and are seasoned with truffle mayonnaise."',
        price: "€ 45,99",
        extras: [
            {
                name: "Extra Onion Chutney",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Thin and crisp fries",
                price: "€ 3.99",
                id: 2,
            },
            {
                name: "Extra Rustic fries with oregano",
                price: "€ 3.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Onion Chutney",
            Ingredient2 : "+ Thin and crisp fries",
            Ingredient3 : "+ Rustic fries with oregano",
        }]
    },
    {
        name: "Bacon and Wild Mushrooms Alfredo Poutine",
        id: 3,
        category: "Meat",
        image: `${images.plate6}`,
        description: "Our canadian craving poutine with italian sauce",
        body: '"From the traditional ways of making a Poutine, this canadian inspired recipe is known from its gravy-soaked fries, toasted sliced bacon, wild fried mushrooms, parmesan cheese and the soft sweetness of the seasoning that embraces this dish at its greatness. The touch of glory of this dish is our homemade Alfredo sauce. Made in the authentic italian way, this rich and creamy white sauce does wonders for the smoothness of this dish."',
        price: "€ 62,99",
        extras: [
            {
                name: "Extra Thin and crisp fries with seasoning",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Baked french fries with herbs",
                price: "€ 3.99",
                id: 2,
            },
            {
                name: "Extra Caramelized onion dip",
                price: "€ 2.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Thin and crisp fries with seasoning",
            Ingredient2 : "+ Baked french fries with herbs",
            Ingredient3 : "+ Caramelized onion dip",
        }]
    },
    {
        name: "Berry & Brie",
        id: 4,
        category: "Appetizers",
        image: `${images.plate4}`,
        description: "Our wild fruits with homemade jams with grilled brie",
        body: '"Add juicy organic strawberries, spiced plum jam, blueberry and grapes marmalade, grilled brie with a cranberry chutney topping with our homemade sesame seeds crackers and get lost into a board of pure sweetness and intense delight to be shared around the table."',
        price: "€ 46,99",
        extras: [
            {
                name: "Extra Walnut tosted bread",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Roasted nuts (walnuts, hazelnuts, almonds and cashews mix)",
                price: "€ 4.99",
                id: 2,
            },
            {
                name: "Apricot Jam",
                price: "€ 3.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Walnut tosted bread",
            Ingredient2 : "+ Roasted nuts (walnuts, hazelnuts, almonds and cashews mix)",
            Ingredient3 : "+ Apricot Jam",
        }]
    },
    {
        name: "Paella Marinera",
        id: 5,
        category: "Fish",
        image: `${images.plate5}`,
        description: "Our classic coloured and flavourful paella",
        body: '"This tradicional spanish recipes know from its vivid vegetable colours and mixes the creativity of the seasoning with the best fresh seafood. Cooked in a special pan called paellera, we serve the Paella Marinera version, with fish and sea food. This golden delicacy is made with olive oil, onions, garlic, fresh tomatoes, different coloured peppers, spanish saffron, grilled shrimp, cuttlefish, mussels, clams, peas and of course, the traditional “bomba rice”, used in Valencian cuisine to get the most plumper and softer rice texture."',
        price: "€ 78,99",
        extras: [
            {
                name: "Extra spicy seasoning",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra grilled shrimps",
                price: "€ 6.99",
                id: 2,
            },
            {
                name: "Extra Lobster",
                price: "€ 8.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Extra spicy seasoning",
            Ingredient2 : "+ Extra grilled shrimps",
            Ingredient3 : "+ Lobster",
        }]
    },
    {
        name: "Veggie Salad",
        id: 6,
        category: "Salad",
        image: `${images.plate3}`,
        description: "Our fresh and (perfect) vibrant salad",
        body: '"The colourful combination of this salad goes beyond the textures, flavours and seasoning within. Using the best ingredients from our own private backyard, we can provide you the freshness of lettuces, tiny radishes, sweet red onion, black and green olives, sliced baby carrots, walnuts, grilled tofu, beetroot, green beans and raisins. Served with a gentle touch with the famous homemade portuguese olive oil, this salad also has three different homemade dressings you can choose from, to complete you fresh experience at your wish."',
        price: "€ 40,99",
        extras: [
            {
                name: "Extra Yoghurt and peppermint sauce",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Curry & ginger cream sauce",
                price: "€ 2.99",
                id: 2,
            },
            {
                name: "Extra Citrus and sour cream sauce",
                price: "€ 2.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Yoghurt and peppermint sauce",
            Ingredient2 : "+ Curry & ginger cream sauce",
            Ingredient3 : "+ Citrus and sour cream sauce",
        }]
    },
    {
        name: "The Perfect Osso Buco",
        id: 7,
        category: "Meat",
        image: `${images.plate7}`,
        description: "Our vibrant and delicious version of the famous osso buco stew",
        body: '" A classic italian stew known for its slow cooking, (2-3 hours), tender veal shanks until the meat is falling off the bone. The uniqueness of its sauce is obtained by the juices of the meat, the vegetables and the special herbs selectively combined, like bay leaves and thyme, which intensify the aromas of this exquisite plate. Served with roasted vegetables (potatoes, pumpkin, carrots, celery and broccoli), tomatoes, white wine, and an incredible sauce made from the delicious broth from the stew."',
        price: "€ 64,99",
        extras: [
            {
                name: "Extra Spicy touch (crushed red pepper flakes and rosemary)",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra stew sauce",
                price: "€ 2.99",
                id: 2,
            },
            {
                name: "Rustic bread",
                price: "€ 3.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Spicy touch (crushed red pepper flakes and rosemary)",
            Ingredient2 : "+ Extra stew sauce",
            Ingredient3 : "+ Rustic bread",
        }]
    },
    {
        name: "Tuna Tataki with sesame seeds",
        id: 8,
        category: "Fish",
        image: `${images.plate8}`,
        description: "Our delicate tuna tataki with a crunchy and colourful salad",
        body: '"Our fresh brased tuna with sesame seeds (white +brown + black) is a delicacy on the mouth. Served with egg curry and vegetables from our own private backyard, such as radish; carrots; green beans and enoki mushrooms, this mix is a pleasure to the eyes and mouth."',
        price: "€ 38,99",
        extras: [
            {
                name: "Extra Teriyaki sauce",
                price: "€ 2.99",
                id: 1,
            },
            {
                name: "Extra Soy sauce",
                price: "€ 2.99",
                id: 2,
            },
            {
                name: "Extra Citric sauce",
                price: "€ 2.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Teriyaki sauce",
            Ingredient2 : "+ Soy sauce",
            Ingredient3 : "+ Citrus sauce",
        }]
    },
    {
        name: "Grilled Veal steak",
        id: 9,
        category: "Meat",
        image: `${images.plate9}`,
        description: "Our special steak, a masterpiece for meat lovers",
        body: '"Don’t be misguided by the minimal look of this steak.  Sprinkled with our mix of secret spices and its previous marinade It’s a feast of flavours This grilled veal steak keeps its magnificent tenderness througout its wise cooking process. It is served with soft boiled eggs and a fresh chimichurri on the side."',
        price: "€ 54,45€",
        extras: [
            {
                name: "Extra Jasmin rice",
                price: "€ 4.99",
                id: 1,
            },
            {
                name: "Extra Roasted potatoes",
                price: "€ 3.99",
                id: 2,
            },
            {
                name: "Extra Mash",
                price: "€ 3.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Jasmin rice",
            Ingredient2 : "+ Roasted potatoes",
            Ingredient3 : "+ Mash",
        }]
    },
    {
        name: "Cheeses and sausages board",
        id:10,
        category: "appetizers",
        image: `${images.plate10}`,
        description: "Our selected cheeses and sausages to share around the table",
        body: '"A board filled with cheeses, (brie, goat cheese with pepper, aged cheddar, manchego and fontina), thinly sliced italian salami, (prosciutto, soppressata and pepperoni), duck foie gras, sour olives in artisanal olive oil, roasted pistachios, pickled gherkins, fresh grapes, and poached apricot and pumpkin, all to be shared with pindulgence around the table. Served with rustic bread and crackers."',
        price: "€ 40,50",
        extras: [
            {
                name: "Extra Crostini",
                price: "€ 3.99",
                id: 1,
            },
            {
                name: "Extra Rosemary honey",
                price: "€ 2.99",
                id: 2,
            },
            {
                name: "Extra Spiced Plum jam",
                price: "€ 2.99",
                id: 3,
            },
        ],
        Ingredients: [{
            Ingredient1 : "+ Crostini",
            Ingredient2 : "+ Rosemary honey",
            Ingredient3 : "+ spiced Plum jam",
        }]
    },
]
export default productData