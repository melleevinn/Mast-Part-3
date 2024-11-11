import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import AddMenuItemScreen from './AddMenuItemScreen';
import CheckoutScreen from './CheckoutScreen';
import { MenuProvider } from './Menucontext';

const Stack = createStackNavigator();

export default function App() {
    return (
        <MenuProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Menu" component={MenuScreen} />
                    <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
                    <Stack.Screen name="Checkout" component={CheckoutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </MenuProvider>
    );
}
