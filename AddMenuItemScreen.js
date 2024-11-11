
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../MenuContext';

export default function AddMenuItemScreen({ navigation }) {
    
    const { addMenuItem } = useMenu();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [course, setCourse] = useState('Starter');

    
    const handleSubmit = () => {
        if (name && description && price) {
            const newItem = {
                id: Date.now().toString(),
                name,
                description,
                price: parseFloat(price),
                course,
            };
            addMenuItem(newItem);
            navigation.goBack();
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder="Enter dish name"
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                style={styles.input}
                placeholder="Enter dish description"
            />
            <Text style={styles.label}>Price:</Text>
            <TextInput
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={styles.input}
                placeholder="Enter dish price"
            />
            <Text style={styles.label}>Course:</Text>
            <Picker
                selectedValue={course}
                onValueChange={(itemValue) => setCourse(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Starter" value="Starter" />
                <Picker.Item label="Main" value="Main" />
                <Picker.Item label="Dessert" value="Dessert" />
            </Picker>
            <Button title="Add Dish" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    picker: {
        height: 50,
        marginBottom: 10,
    },
});

