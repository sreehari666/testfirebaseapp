import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from './pages/Login';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Signup') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-enter' : 'ios-enter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2980B9',
          tabBarInactiveTintColor: 'gray',
        })}>
      
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Tab.Screen name="Login" component={Login} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Tab" component={MyTabs} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}