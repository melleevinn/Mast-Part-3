
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useMenu } from '../MenuContext';

export default function CheckoutScreen() {
    const { cartItems, calculateTotal } = useMenu();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Checkout</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name} - ${item.price}</Text>
                    </View>
                )}
            />
            <Text style={styles.total}>Total: ${calculateTotal()}</Text>
            <Button title="Place Order" onPress={() => alert('Order Placed!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    header: { fontSize: 24, fontWeight: 'bold' },
    item: { marginVertical: 10 },
    total: { marginTop: 20, fontSize: 20, fontWeight: 'bold' },
});
