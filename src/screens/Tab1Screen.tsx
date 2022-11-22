

import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';

export const Tab1Screen = () => {

useEffect(() => {
  

  return () => {
    console.log('Tab 1 screen');
  }
}, [])


  return (
    <View>
        <Text>
            Tab 1 Screen
        </Text>
    </View>
  )
}
