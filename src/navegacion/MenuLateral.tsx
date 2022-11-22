
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export  const MenuLateral = () => {

  const {width} = useWindowDimensions();
  const menu = Drawer.Navigator.contextTypes;
  
  return (
      console.log(width),
      <Drawer.Navigator
        screenOptions={{
          drawerType: width >= 600 ? 'permanent' : 'front'
        }}
        drawerContent={ (props) => <MenuInterno {...props} />  } 
      >
        <Drawer.Screen name="StackNavigator"  component={ StackNavigator } />
        <Drawer.Screen name="SettingsScreen"  component={ SettingsScreen } />
      </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) =>{
  return(
    <DrawerContentScrollView>
      {/* Contenedor del avatar */}
      <View style={styles.container}>
        <Image
          source={{
            uri:"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.tochable}>
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>   

        <TouchableOpacity 
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.tochable}>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity> 
      </View>
    </DrawerContentScrollView>
  );
}