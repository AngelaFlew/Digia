import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import NewEntryScreen from './screens/NewEntryScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';
import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="New Entry" component={NewEntryScreen} />
        <Tab.Screen name="Profile Settings" component={ProfileSettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;