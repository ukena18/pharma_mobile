import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../screens/homepage';
import Profile from '../screens/profile';
import Person_add from '../screens/person_add';
import Search from '../screens/search';
import Order_add from '../components/order_add';
import {ModalProvider} from '../authContext/modalContext';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <ModalProvider>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#FFDEAD',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown:false,
      }}
      >
        <Stack.Screen name="Profile" component={Profile}  initialParams={{ pk:37 }} />
        <Stack.Screen name="Homepage" component={Homepage}/>
        
        <Stack.Screen name="Person_add" component={Person_add}  />
        <Stack.Screen name="Search" component={Search}  />
        <Stack.Screen name="Order_add" component={Order_add}  />
      </Stack.Navigator>
      </ModalProvider>
   
  );
}