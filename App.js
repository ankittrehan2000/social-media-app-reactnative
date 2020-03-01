//to do: refine webview, add list of blogs, opening modals and fixing the scanning
//https://www.happycow.net/
//crontab
//https://blog.bitsrc.io/webview-the-bridge-that-connects-react-native-with-the-web-95a0d5aaa31a
//https://amanhimself.dev/how-to-use-webviews-in-a-react-native-app

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import TabScreen from './src/screens/tabScreen';
import BarCodeScanner from './src/screens/BarCodeScanner';
import Recepies from './src/screens/Recepies';
import Info from './src/screens/InfoScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabScreen"
      activeColor="#00c400"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'white' }}
      color={'white'}
      shifting={true}>
      <Tab.Screen
        name="TabScreen"
        component={TabScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={BarCodeScanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camera-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recepies"
        component={Recepies}
        options={{
          tabBarLabel: 'Recepies',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barley" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreInfo"
        component={Info}
        options={{
          tabBarLabel: 'Recepies',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
