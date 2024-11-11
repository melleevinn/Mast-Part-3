import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState([
        { id: '1', name: 'Grilled Chicken', description: 'Tender grilled chicken', price: 15, course: 'Main' },
        { id: '2', name: 'Caesar Salad', description: 'Fresh Caesar salad with crispy croutons', price: 10, course: 'Starter' },
        { id: '3', name: 'Chocolate Cake', description: 'Rich chocolate dessert with vanilla ice cream', price: 7, course: 'Dessert' },
        { id: '4', name: 'Tomato Basil Soup', description: 'Creamy tomato soup with fresh basil', price: 8, course: 'Starter' },
        { id: '5', name: 'Beef Steak', description: 'Grilled beef steak with a side of vegetables', price: 20, course: 'Main' },
        { id: '6', name: 'Pasta Carbonara', description: 'Creamy pasta with pancetta and parmesan', price: 14, course: 'Main' },
        { id: '7', name: 'Garlic Bread', description: 'Freshly baked garlic bread with herbs', price: 5, course: 'Starter' },
        { id: '8', name: 'Apple Pie', description: 'Warm apple pie with a cinnamon crust', price: 6, course: 'Dessert' },
        { id: '9', name: 'Lobster Bisque', description: 'Rich and creamy lobster bisque', price: 12, course: 'Starter' },
        { id: '10', name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone and coffee', price: 8, course: 'Dessert' },
        { id: '11', name: 'Roasted Salmon', description: 'Oven-roasted salmon with dill sauce', price: 18, course: 'Main' },
        { id: '12', name: 'Vegetable Stir-fry', description: 'Mixed vegetables stir-fried in a savory sauce', price: 12, course: 'Main' },
        { id: '13', name: 'Mango Sorbet', description: 'Refreshing mango sorbet with mint', price: 5, course: 'Dessert' },
        { id: '14', name: 'Bruschetta', description: 'Grilled bread topped with fresh tomatoes and basil', price: 7, course: 'Starter' },
        { id: '15', name: 'Chicken Parmesan', description: 'Breaded chicken with marinara and mozzarella', price: 16, course: 'Main' }
    ]);

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => setCartItems([...cartItems, item]);

    const calculateTotal = () => cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <MenuContext.Provider value={{ menuItems, cartItems, addToCart, calculateTotal }}>
            {children}
        </MenuContext.Provider>
    );
};
