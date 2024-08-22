import React , {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, FlatList} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabBar from '../../components/BottomTabBar';
import { MenuContext } from '../../Global/userMenu';

function HomeScreen({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Home Screen');
    const [cart, setCart] = useState('');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    const {menu} = useContext(MenuContext);
    
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