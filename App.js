import 'react-native-gesture-handler';
import * as React from 'react';
import TabNavigator from './routes/tabNavigator';
import {AuthProvider} from "./authContext/authContext";
export default function App() {



  return (
    <AuthProvider>
    <TabNavigator />
    </AuthProvider>
  );
}