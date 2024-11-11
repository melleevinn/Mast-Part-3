
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useMenu } from '../MenuContext';

export default function MenuScreen({ navigation }) {
    const { menuItems, addToCart } = useMenu();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [quantity, setQuantity] = useState(1);

   
    const filteredItems = selectedCourse
        ? menuItems.filter(item => item.course === selectedCourse)
        : menuItems;

    const handleAddToCart = (item) => {
        addToCart({ ...item, quantity });
        alert(`Added ${quantity} x ${item.name} to cart`);
        setQuantity(1); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Menu</Text>

           
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setSelectedCourse(null)} style={[styles.filterButton, !selectedCourse && styles.activeFilter]}>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCourse('Starter')} style={[styles.filterButton, selectedCourse === 'Starter' && styles.activeFilter]}>
                    <Text>Starters</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCourse('Main')} style={[styles.filterButton, selectedCourse === 'Main' && styles.activeFilter]}>
                    <Text>Mains</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCourse('Dessert')} style={[styles.filterButton, selectedCourse === 'Dessert' && styles.activeFilter]}>
                    <Text>Desserts</Text>
                </TouchableOpacity>
            </View>

        
            <FlatList
                data={filteredItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemName}>{item.name} - ${item.price.toFixed(2)}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>

                    
                        <View style={styles.quantityContainer}>
                            <Text>Quantity:</Text>
                            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>

              
                        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} color="#3b7ddd" />
                    </View>
                )}
            />

            <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} color="#4CAF50" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
    },
    filterButton: {
        padding: 10,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 5,
        borderRadius: 20,
    },
    activeFilter: {
        backgroundColor: '#3b7ddd',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDescription: {
        fontSize: 16,
        color: '#666',
        marginVertical: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    quantityButton: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
});
