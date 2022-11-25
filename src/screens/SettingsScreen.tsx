



import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();
  const { authState } = useContext( AuthContext );


  const context = useContext( AuthContext )

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: 20}}>
      <Text style={{...styles.title}}>
        SettingsScreen
      </Text>
      <Text>{JSON.stringify(context.authState, null, 4)}</Text>
      {
        context.authState.favoriteIcon &&
          <Icon 

            style={{alignSelf:'center'}}
            name={ context.authState.favoriteIcon }
            size={150}
            color="#600"
          />
      }
      

    </View>
  )
}
