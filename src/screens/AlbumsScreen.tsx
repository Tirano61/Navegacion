

import React from 'react'
import { View,Button, Text } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';


export const AlbumsScreen = () => {

  const { authState, logOut } = useContext(AuthContext);
  const { isLoggedIn } = authState;


  return (
    <View>
        <Text style={styles.globalMargin}>Albums Screen</Text>

        {
          (isLoggedIn) && <Button title="LogOut" onPress={ logOut }/>
        }

    </View>
  )
}
