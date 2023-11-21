import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import TrendingScreen from './src/screens/TrendingScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ItemScreen from './src/screens/ItemScreen';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CartScreen from './src/screens/CartScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import MostSaleScreen from './src/screens/MostSaleScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home-outline',
  ProfileScreen: 'person-outline',
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Trending" component={TrendingScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MostSale" component={MostSaleScreen} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = tabIcons[route.name] || 'ios-information-circle';

            // Use Ionicons for the icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
