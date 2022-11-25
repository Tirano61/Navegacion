

import React, { useContext } from 'react'
import { View,Button, Text  } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsSreen = () => {

  const { authState,singIn } = useContext(AuthContext);
  const { isLoggedIn } = authState;

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Contacts Screen</Text>
        {
          (!isLoggedIn) && <Button title="SignIn" onPress={ singIn }/>
        }
    </View>
  )
}
