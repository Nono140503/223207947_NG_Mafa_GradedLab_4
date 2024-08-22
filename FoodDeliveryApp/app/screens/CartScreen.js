import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import CartHeader from '../../components/CartHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuContext } from '../../Global/userMenu';

function CartScreen({navigation}){
    const [currentScreen, setCurrentScreen] = useState('Cart');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
        navigation.navigate(screen);
    };
    const handleCheckout = () => {
        Alert.alert(
            "Confirm Checkout",
            "Are you sure you want to proceed to checkout? This will clear your cart.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        setCart([]);
                        setTotal('0.00');
                        
                        navigation.navigate('Cart');
                    }
                }
            ]
        );
    };
    const {cart, setCart, total, setTotal} = useContext(MenuContext);

    const updateCart = (item, operation) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.menuItem === item.menuItem) {
                let newCount = cartItem.count;
                if (operation === 'add') {
                    newCount += 1;
                } else if (operation === 'subtract' && cartItem.count > 1) {
                    newCount -= 1;
                }
                return { ...cartItem, count: newCount };
            }
            return cartItem;
        });
        setCart(updatedCart);
        updateTotalPrice(updatedCart);
    };

    const updateTotalPrice = (cartItems) => {
        let newTotal = 0;
        cartItems.forEach(item => {
            newTotal += parseFloat(item.price.replace('R', '')) * item.count;
        });
        setTotal(newTotal.toFixed(2));
    };

    useEffect(() => {
        updateTotalPrice(cart);  
    }, []);

    return(
        <>  
        <View>
            <CartHeader navigation={navigation}/>
            <ScrollView style={styles.container}>
                <Text style={styles.menu}>Menu</Text>
                <FlatList
                    style={styles.list_cont}
                    data={cart}
                    keyExtractor={(item) => item.menuItem}
                    renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            <Image source={{ uri: item.image }} style={styles.img}/>
                        </View>
                        <View style={styles.content}>
                        <View style={styles.item_content}>
                            <Text style={styles.itemLabel}>Item:</Text>
                            <View>
                                <Text style={styles.menuItem}>{item.menuItem}</Text>
                                <View style={styles.quantity}>
                                    <TouchableOpacity style={styles.addButton} onPress={() => updateCart(item, 'add')}>
                                        <Icon name='add-outline' size={20} style={styles.buttonIcon}/>
                                    </TouchableOpacity>
                                    <Text style={styles.itemCount}>{item.count}</Text>
                                    <TouchableOpacity style={styles.addButton} onPress={() => updateCart(item, 'subtract')}>
                                            <Icon name='remove-outline' size={20} style={styles.buttonIcon}/>
                                        </TouchableOpacity>
                                    </View>
                        <View style={styles.add}>
                            <View style={styles.priceCont}>
                                <Text style={styles.price}>Price:</Text>
                                <Text style={styles.itemPrice}>R{(parseFloat(item.price.replace('R', '')) * item.count).toFixed(2)}</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                </View>
                    </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 150 }} 
                />
            </ScrollView>
        </View>
        <View style={styles.total}>
            <Text style={styles.totalText}>Total: </Text>
            <Text style={styles.amount}>R{total}</Text>
            <TouchableOpacity style={styles.checkout} onPress={handleCheckout}>
                <Text style={styles.checkout_text}>Checkout</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A1C1E1',
        height: '100%',
    },
    checkout_text:{
        color: 'white',
    },
    checkout:{
        marginLeft: 80,
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
    },
    totalText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    amount:{
        marginLeft: 10,
        color: '#2A65BC',
        fontSize: 19,
        fontWeight: 'bold',

    },
    item_content:{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        width: '70%',
    },
    total:{
        flexDirection: 'row',
        borderTopColor: 'grey',
        borderTopWidth: 0.4,
        padding: 30,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
    },
    quantity:{
        display:'flex',
        flexDirection: 'row',
    },
    itemCount:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    itemLabel:{
        marginTop: 7,
        fontWeight: 'bold',
        color: '#2A65BC',
        fontSize: 16,
    },
    itemPrice:{
        color:'black',
        fontSize: 18,
    },
    buttonText:{
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonIcon:{
        color: '#2A65BC',
        marginLeft: 2,
        fontWeight: 'bold',
    },
    add:{
        alignItems: 'flex-end',
        paddingRight: 20,
        marginTop: 10,
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
        marginTop: 10,
    },
    addButton:{
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: '37%',
        alignItems: 'center', 
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    card:{
        width: '90%',
        backgroundColor: 'white',
        maxHeight: 'auto',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5, 
        shadowRadius: 3.5,
        marginTop: 20,
        marginLeft: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row'
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
        color: '#2A65BC',
        fontWeight: 'bold',
        paddingRight:10,
        fontSize: 18,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        padding: 15,
        width: '90%',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius:10,
        marginLeft: 10,
        marginTop: 30,
    },
    menuItem: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
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
export default CartScreen
