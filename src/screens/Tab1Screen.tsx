

import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

useEffect(() => {
  

  return () => {
    console.log('Tab 1 screen');
  }
}, [])


  return (
    <View>
        <Text>Tab 1 Screen</Text>
        <Text>
          <Icon name="airplane-outline" size={30} color="#900" />
        </Text>
    </View>
  )
}
