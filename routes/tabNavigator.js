import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login_page from '../screens/login_page';
import Search from '../screens/search';
// import Homepage from '../screens/homepage';
import HomeStack from './homeStack';
import Person_add from '../screens/person_add';
import {useState, useContext} from 'react';
import AuthContext from '../authContext/authContext';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  let { user } = useContext(AuthContext)
  console.log(user)
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name={'home-outline'} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}
      >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      {user && <Tab.Screen name="Person_add" component={Person_add} /> }
      {user ? <Tab.Screen name="Log_out" component={Person_add} /> 
      :<Tab.Screen name="Login_page" component={Login_page} /> }
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}