

import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

useEffect(() => {
  
  return () => {
    console.log('Tab 1 screen');
  }
}, [])


  return (
    <View style={styles.globalMargin}>
        <Text>Tab 1 Screen</Text>
        <Text >
          <TouchableIcon name='airplane-outline' />
          <TouchableIcon name="bonfire-outline"  />
          <TouchableIcon name="leaf-outline"  />
        </Text>
    </View>
  )
}
