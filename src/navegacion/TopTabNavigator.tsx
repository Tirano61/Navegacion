
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactsSreen } from '../screens/ContactsSreen';
import { ChatSreen } from '../screens/ChatSreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        tabBarPressColor: '#3d14b3',
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor: '#3d14b3',
        },
        tabBarStyle:{
          borderColor: 'green',
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
              case 'ContactsSreen':
                  iconName = "people-outline";
                  break;
              case 'ChatSreen':
                  iconName = 'chatbox-ellipses-outline'
                  break;
              case 'AlbumsScreen':
                  iconName = 'images-outline'
                  break;    
              default:
                  break;
          }
          return <Icon name={iconName} size={20} color="#900" />
            
            
            
      },
      })}
    >
      <Tab.Screen name="ContactsSreen" options={{title: 'Contacts'}} component={ContactsSreen} />
      <Tab.Screen name="ChatSreen"     options={{title: 'Chat'}} component={ChatSreen} />
      <Tab.Screen name="AlbumsScreen"  options={{title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}