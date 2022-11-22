
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactsSreen } from '../screens/ContactsSreen';
import { ChatSreen } from '../screens/ChatSreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContactsSreen" component={ContactsSreen} />
      <Tab.Screen name="ChatSreen" component={ChatSreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}