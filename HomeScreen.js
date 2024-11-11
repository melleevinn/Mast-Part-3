import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useMenu } from '../MenuContext';

export default function HomeScreen({ navigation }) {
    const { menuItems } = useMenu();

    const calculateAveragePrice = (course) => {
        const items = menuItems.filter(item => item.course === course);
        const total = items.reduce((sum, item) => sum + item.price, 0);
        return items.length ? (total / items.length).toFixed(2) : '0.00';
    };

    const courses = [
        { title: 'Starters', averagePrice: calculateAveragePrice('Starter') },
        { title: 'Mains', averagePrice: calculateAveragePrice('Main') },
        { title: 'Desserts', averagePrice: calculateAveragePrice('Dessert') },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to Christoffel's Culinary App</Text>
                <Text style={styles.subHeader}>Where flavors meet finesse!</Text>

   
                <View style={styles.pricingContainer}>
                    <Text style={styles.sectionTitle}>Average Price by Course</Text>
                    {courses.map((course, index) => (
                        <Text key={index} style={styles.courseText}>
                            {course.title}: ${course.averagePrice}
                        </Text>
                    ))}
                </View>

   
                <View style={styles.specialContainer}>
                    <Text style={styles.specialHeader}>Chef's Special of the Day</Text>
                    <Text style={styles.specialText}>Try our exclusive Grilled Salmon with Lemon Butter Sauce at $25!</Text>
                </View>

                <Button
                    title="View Menu"
                    onPress={() => navigation.navigate('Menu')}
                    color="#3b5998"
                />
                <Button
                    title="Checkout"
                    onPress={() => navigation.navigate('Checkout')}
                    color="#8b9dc3"
                    style={styles.checkoutButton}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#f0f4f8',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#34495e',
        marginBottom: 8,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 16,
        color: '#7f8c8d',
        marginBottom: 16,
        textAlign: 'center',
    },
    pricingContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#ecf0f1',
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2980b9',
        marginBottom: 10,
    },
    courseText: {
        fontSize: 16,
        color: '#2c3e50',
    },
    specialContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#dff9fb',
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    specialHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27ae60',
    },
    specialText: {
        fontSize: 15,
        color: '#2c3e50',
        textAlign: 'center',
    },
    checkoutButton: {
        marginTop: 10,
    },
});
