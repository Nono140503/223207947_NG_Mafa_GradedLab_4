import React , {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabBar from '../../components/BottomTabBar';

function HomeScreen({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Home Screen');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    const [menu, setMenu] = useState([
        {
            menuItem: 'Asian Noodles with Grilled Tofu and Vegetables',
            dietry: 'Vegan🌱',
            description: 'Craving Asian food? Enjoy our Grilled Tofu & Veggie Noodle Bowl—tender tofu and veggies with soba noodles in creamy peanut dressing, topped with scallions, cilantro, and peanuts.',
            image: "https://ux2cms.imgix.net/images/20160927143508_686_4_960x640.jpg?w=725&auto=compress,format&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=0&bm=normal",
            price: "R87.90",
        },
        {
            menuItem: 'Vegetarian Pizza With Caramelised Onions, Peppers And Blue Cheese',
            dietry: 'Vegetarian🌱',
            description: 'Indulge in gourmet delight: Enjoy our Vegetarian Pizza with caramelized onions, red peppers, melted mozzarella, tangy blue cheese, and toasted walnuts.',
            image: "https://www.weber.co.za/wp-content/uploads/2021/11/Vegetarian_Pizza_With_Caramelised_Onions_Peppers_And_Blue_Cheese.jpg",
            price: "R67.99",
        },
        {
            menuItem: 'Classic Cheese Burger with Fries and Coke',
            dietry: 'Meat🍖',
            description: 'Classic Cheeseburger Combo: Juicy cheeseburger with melted cheese, crispy fries, and a refreshing Coke.',
            image: "https://www.mrcoconut.in/img/products/23_10_2021_13_44_902_pm.webp",
            price: "R59.99",
        },
        {
            menuItem: "Ngi'cela iKota",
            dietry: 'Meat🍖',
            description: 'Sink your teeth into a koti with toasted bread, russian, chips, cheese and polony. A kasi classic.',
            image: "https://media.citizen.co.za/wp-content/uploads/2023/04/Flying-fish-neos-kota-1200x960-1.jpg",
            price: "R38.90",
        },
        {
            menuItem: 'Gourmet Tacos',
            dietry: 'Meat🍖',
            description: '3 Soft tortillas filled with grilled meats, topped with fresh salsa, avocado, and a squeeze of lime.',
            image: "https://popmenucloud.com/zrbqcnsl/46067422-70d7-42db-8f01-90ee6feed2aa.jpg",
            price: "R75.90",
        },
        {
            menuItem: 'Truffle Mac & Cheese',
            dietry: 'Vegan🌱',
            description: 'Creamy, rich mac & cheese made with plant-based cheese and truffle oil, offering a decadent, dairy-free twist on a classic favorite.',
            image: "https://itdoesnttastelikechicken.com/wp-content/uploads/2020/02/vegan-truffle-mac-and-cheese-easy-how-to-make-facebook.jpg",
            price: "R68.90",
        },
        {
            menuItem: 'Chocolate Lava Cake',
            dietry: 'Vegetarian🌱',
            description: 'Rich chocolate cake with a gooey molten center, served warm with a scoop of vanilla ice cream.',
            image: "https://bakemesomesugar.com/wp-content/uploads/2021/06/lava-cake-recipe.jpg",
            price: "R40.90",
        },
        {
            menuItem: 'Vegan Chocolate Avocado Mousse',
            dietry: 'Vegan🌱',
            description: 'Creamy and rich chocolate mousse made with ripe avocados, cocoa powder, and a touch of maple syrup. A silky, dairy-free treat with a surprising depth of flavor.',
            image: "https://mariani.com/cdn/shop/articles/mariani-dark-chocolate-avocado-mousse-3_RECIPE-2.jpg?v=1637231754",
            price: "R56.90",
        },
        {
            menuItem: 'Doughnuts',
            dietry: 'Vegetarian🌱',
            description: 'Get 3 deliciously fried and coated with sugar or glaze, these classic treats come in a variety of flavors and fillings. Perfect for a sweet indulgence',
            image: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg",
            price: "R55.80",
        },
    ]);
    return(
        <>  
        <View>
            <HomeHeader/>
             <ScrollView style={styles.container}>
                <Text style={styles.menu}>Menu</Text>
            <FlatList
                style={styles.list_cont}
                data={menu}
                keyExtractor={(item) => item.menuItem}
                renderItem={({ item }) => (
                    
                        <View style={styles.card}>

                            <View>
                                <Image source={{ uri: item.image }} style={styles.img}/>
                            </View>
                                <View style={styles.content}>
                                    <Text style={styles.menuItem}>{item.menuItem}</Text>
                                    <Text style={styles.dietry}>{item.dietry}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                    
                                    
                                </View>
                                <View style={styles.add}>
                                    <View style={styles.priceCont}>
                                        <Text style={styles.price}>Price:</Text>
                                        <Text style={styles.itemPrice}>{item.price}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.buttonText}>Add to Cart</Text>
                                        <Icon name='cart-outline' size={20} style={styles.buttonIcon}/>
                                    </TouchableOpacity>

                                </View>
                            
                        </View>
                    
                )}
                contentContainerStyle={{ paddingBottom: 150 }} 
            />
            <View style={styles.space}>
                <Text></Text>
            </View>
        </ScrollView>
      
        </View>
        <BottomTabBar
        navigation={navigation} 
        currentScreen={currentScreen}
        onNavigate={handleNavigation}/>
        
            

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        maxHeight: 'auto',
        
    },
    itemPrice:{
        color:'white',
        
    },
    buttonText:{
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonIcon:{
        color: 'green',
        marginLeft: 2,
        fontWeight: 'bold',
    },
    add:{
        alignItems: 'flex-end',
        paddingRight: 20,

    },
    menu:{
        marginTop:10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2A65BC',
    },
    priceCont:{
        display: 'flex',
        flexDirection: 'row',
    },
    addButton:{
        backgroundColor: 'white',
        padding: 12,
        marginTop: 10,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center', 
        display: 'flex',
        flexDirection: 'row',
    },
    card:{
        width: '90%',
        backgroundColor: '#5170FE',
        maxHeight: 'auto',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5, 
        shadowRadius: 3.5,
        marginTop: 20,
        marginLeft: 20,
        paddingBottom: 20,
       
    },
    content:{
        paddingLeft: 15,
        paddingBottom: 10,
        paddingRight: 15,
    },
    description:{
        color: 'white',
        marginTop: 8,
        fontSize: 14,
     
    },
    price:{
        color: 'white',
        fontWeight: 'bold',
        paddingRight:10,
        fontSize: 15,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        padding: 15,
        width: '90%',
    },
    img: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
    },
    menuItem: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',       
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 1,
        marginTop: '5%',
    },
    dietry: {
        color: 'white',
        fontSize: 17,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',       
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 4,
    },
    input: {
        marginTop: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    userInput: {
        fontSize: 16,
        padding: '5%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 50,
        width: '80%',
        marginLeft: 40,
    },
    buttonSearch: {
        right: 50,
    },
    space: {
        height: 50,
    },
});
export default HomeScreen