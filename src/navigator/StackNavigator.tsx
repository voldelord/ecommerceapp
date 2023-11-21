import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TrendingScreen from '../screens/TrendingScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemScreen from '../screens/ItemScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import MostSaleScreen from '../screens/MostSaleScreen';
import {Tabs} from './Tabs';
import PaymentSucecefull from '../screens/PaymentSucecefull';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Trending" component={TrendingScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="MostSale" component={MostSaleScreen} />
      <Stack.Screen name="HomeScreen" component={Tabs} />
      <Stack.Screen name="PaymentSucecefull" component={PaymentSucecefull} />
    </Stack.Navigator>
  );
};
