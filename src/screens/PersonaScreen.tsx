

import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavigator';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number,
//   nombre: string,
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

  // const params = route.params as RouterParams;
  const params = route.params;
  let nombre = params.nombre;
  const { changeName, authState:{ isLoggedIn }} = useContext(AuthContext);
  useEffect(() => {
  
      changeName(nombre);
   
  }, []),
  
  useEffect(() => {
    return () => {
      navigation.setOptions({
        title: params.nombre
      }); 
    }
  }, []);
  
   
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{nombre}</Text>

        <Text>
          {JSON.stringify(params, null, 3)}
        </Text>

    </View>
  )
}
