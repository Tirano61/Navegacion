import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';



export const Pagina2Screen = () => {

  const navigator = useNavigation();
  useEffect(() => {
    return () => {
      navigator.setOptions({
        headerBackTitle: 'Back',
      });
    }
  }, [])
  

  return (
    <View style= {styles.globalMargin}>
        <Text style={styles.title}>
            Pagina 2
        </Text>
        <Button 
          title='Ir pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />
    </View>
  )
}