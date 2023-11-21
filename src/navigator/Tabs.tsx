import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProfileScreen from '../screens/UserProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddDevices') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Calefon') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'exit' : 'exit-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B5206A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {display: 'flex'}, // Puedes ajustar otros estilos aquí
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};
