
import React, { createContext, useState } from 'react';

const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState([
        {
            menuItem: 'Asian Noodles with Grilled Tofu and Vegetables',
            dietry: 'Vegan🌱',
            description: 'Craving Asian food? Enjoy our Grilled Tofu & Veggie Noodle Bowl—tender tofu and veggies with soba noodles in creamy peanut dressing, topped with scallions, cilantro, and peanuts.',
            image: "https://ux2cms.imgix.net/images/20160927143508_686_4_960x640.jpg?w=725&auto=compress,format&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=0&bm=normal",
            price: "R87.90",
            inCart: false,
            count: 1, 
        },
        {
            menuItem: 'Vegetarian Pizza With Caramelised Onions, Peppers And Blue Cheese',
            dietry: 'Vegetarian🌱',
            description: 'Indulge in gourmet delight: Enjoy our Vegetarian Pizza with caramelized onions, red peppers, melted mozzarella, tangy blue cheese, and toasted walnuts.',
            image: "https://www.weber.co.za/wp-content/uploads/2021/11/Vegetarian_Pizza_With_Caramelised_Onions_Peppers_And_Blue_Cheese.jpg",
            price: "R67.99",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Classic Cheese Burger with Fries and Coke',
            dietry: 'Meat🍖',
            description: 'Classic Cheeseburger Combo: Juicy cheeseburger with melted cheese, crispy fries, and a refreshing Coke.',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo7R9ujAFI-uYCnHj9gieMMEXDmdmLC6E0w&s",
            price: "R59.99",
            inCart: false,
            count: 1,
        },
        {
            menuItem: "Ngi'cela iKota",
            dietry: 'Meat🍖',
            description: 'Sink your teeth into a kota with toasted bread, russian, chips, cheese and polony. A kasi classic.',
            image: "https://media.citizen.co.za/wp-content/uploads/2023/04/Flying-fish-neos-kota-1200x960-1.jpg",
            price: "R38.90",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Gourmet Tacos',
            dietry: 'Meat🍖',
            description: '3 Soft tortillas filled with grilled meats, topped with fresh salsa, avocado, and a squeeze of lime.',
            image: "https://popmenucloud.com/zrbqcnsl/46067422-70d7-42db-8f01-90ee6feed2aa.jpg",
            price: "R75.90",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Truffle Mac & Cheese',
            dietry: 'Vegan🌱',
            description: 'Creamy, rich mac & cheese made with plant-based cheese and truffle oil, offering a decadent, dairy-free twist on a classic favorite.',
            image: "https://itdoesnttastelikechicken.com/wp-content/uploads/2020/02/vegan-truffle-mac-and-cheese-easy-how-to-make-facebook.jpg",
            price: "R68.90",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Chocolate Lava Cake',
            dietry: 'Vegetarian🌱',
            description: 'Rich chocolate cake with a gooey molten center, served warm with a scoop of vanilla ice cream.',
            image: "https://bakemesomesugar.com/wp-content/uploads/2021/06/lava-cake-recipe.jpg",
            price: "R40.90",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Vegan Chocolate Avocado Mousse',
            dietry: 'Vegan🌱',
            description: 'Creamy and rich chocolate mousse made with ripe avocados, cocoa powder, and a touch of maple syrup. A silky, dairy-free treat with a surprising depth of flavor.',
            image: "https://mariani.com/cdn/shop/articles/mariani-dark-chocolate-avocado-mousse-3_RECIPE-2.jpg?v=1637231754",
            price: "R56.90",
            inCart: false,
            count: 1,
        },
        {
            menuItem: 'Doughnuts',
            dietry: 'Vegetarian🌱',
            description: 'Get 3 deliciously fried and coated with sugar or glaze, these classic treats come in a variety of flavors and fillings. Perfect for a sweet indulgence',
            image: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg",
            price: "R55.80",
            inCart: false, 
            count: 1,
        },
    ]);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuContext, MenuProvider };
