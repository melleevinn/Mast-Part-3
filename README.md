# Mast-Part-3

Christoffel's Culinary Mobile App

1. Project Overview
This React Native mobile application is a multi-screen digital menu solution designed for private chefs and restaurant owners. It provides a seamless experience for users to explore a digital menu, add items to a shopping cart, select courses (like Starters, Mains, and Desserts), and dynamically calculate the total cart price. This project aims to provide a modern and intuitive interface that supports easy navigation and flexible management of menu items.

Key Objectives:
•	To create a digital menu app that simplifies menu management.
•	To implement a user-friendly interface for menu browsing, cart management, and checkout.
•	To enable course filtering for quick selection based on different meal types.

2. Core App Features
Home Screen
•	Welcome Message and Navigation: The home screen provides a warm welcome to users, allowing them to easily navigate to the menu or cart.
•	Average Price Calculation: Displays the average price for each course type (Starters, Mains, Desserts) to give users an overview of typical costs.
•	Navigation Buttons: Clear options to explore the menu or proceed to checkout.
Menu Screen
•	Display All Dishes: Lists all available menu items, including dish names, descriptions, and prices.
•	Course Filtering: Users can filter menu items by course (e.g., Starters, Mains, Desserts) to quickly find what they’re looking for.
•	Add to Cart: Each dish has an “Add to Cart” button for easy selection.
Add Menu Item Screen
•	Dynamic Dish Addition: Allows the chef to add new dishes to the menu, specifying the name, price, description, and course type.
•	Real-Time Updates: New dishes are immediately visible in the menu list, enhancing the chef’s flexibility to adapt the menu.
Checkout Screen
•	Cart Summary: Displays selected items, each with a name and price, for easy review before checkout.
•	Total Price Calculation: Automatically calculates the total price of all items in the cart.
•	Order Confirmation: A “Place Order” button lets users complete their order.

3. Technology Stack
•	React Native: The core framework for developing the mobile app, enabling cross-platform compatibility.
•	TypeScript: Used to enhance code reliability, manage data types, and improve development efficiency.
•	React Navigation: Provides intuitive screen transitions and navigation between Home, Menu, Add Item, and Checkout screens.
•	Custom Hooks and Context API: Used for state management, especially for managing cart and menu data.
•	StyleSheet: Provides modern styling for a polished, cohesive design.

4. How It Works
State management is handled with React's Context API and custom hooks, allowing data (menu items, cart contents, total prices) to be accessible across all screens.

Main User Flow
1.	Home Screen: Displays the average price for each course and options to navigate to the Menu or Cart.
2.	Menu Screen: Lists all menu items with an option to add them to the cart. Users can filter the list by course type.
3.	Add Menu Item Screen: The chef can dynamically add dishes to the menu, specifying details like name, description, price, and course.
4.	Checkout Screen: Shows the items added to the cart, calculates the total, and allows users to finalize their order.
Dynamic Price and Cart Management
•	Average Price Calculation: The app dynamically calculates and displays the average price per course on the Home screen.
•	Cart Total Calculation: The app tracks the items added to the cart and calculates the total cost on the Checkout screen.

5.	Modern UI Design and User Experience
Design Principles
•	Clean, Minimalist Layout: Ensures easy navigation with a user-centric focus on buttons and options.
•	Responsive and Intuitive Design: The layout adapts to both small and large screen sizes, offering a seamless experience across devices.
•	Course Filter: Allows users to quickly find relevant dishes based on selected courses, improving the browsing experience.
•	Smooth Transitions: Buttons and navigation are designed for smooth, intuitive transitions between screens.
Styling Choices
•	Color Palette: A contemporary color scheme that includes a combination of subtle and vibrant colors (e.g., #FF6347 for primary elements) to create a warm, inviting look.
•	Font and Iconography: Uses modern fonts and icons to ensure a professional, polished look.

6. Code and Structure Summary
Key Files
•	App: Main entry file that sets up navigation and provides the Cart context across the app.
•	HomeScreen: Displays a welcome message, average course prices, and navigation buttons.
•	MenuScreen: Lists all menu items with “Add to Cart” options and a filter function for course types.
•	AddMenuItemScreen: Allows chefs to dynamically add new menu items with details.
•	CheckoutScreen: Shows the cart summary and calculates the total price. 

Code and Design Enhancements
•	Custom Context API: Simplifies global state management, making it easy to access and manipulate cart data across screens.
•	Refactored Components: Organized components and screens with modular functions and reusable elements to optimize performance.
•	StyleSheet: Ensures consistent styling across all screens, with centralized color schemes, font styles, and layout structures.

