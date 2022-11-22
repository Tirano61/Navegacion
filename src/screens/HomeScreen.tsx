
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
interface Props extends StackScreenProps <any, any>{};

export const HomeScreen = ( props: Props ) => {

   
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Home Screen
        </Text>
        <Button
            title='Ir pagina 2'
            onPress={ () => props.navigation.navigate('Pagina2Screen') }
        />
        <Text style={{marginTop: 30}}>
          Navegar con Argumentos
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{
            ...styles.botonGrande,
            backgroundColor: '#5856d6'
          }}
            onPress={ () => props.navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'}) }
          >
            <Text>Pedro</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{
            ...styles.botonGrande,
            backgroundColor: '#ff9427'
          }}
            onPress={ () => props.navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'}) }
          >
            <Text>Maria</Text>
          </TouchableOpacity> 
        </View>
        
          
      
        
       
    </View>
  )
}
