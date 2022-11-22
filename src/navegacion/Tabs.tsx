



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: '#3d14b3'  
        }}
        screenOptions={ ({route}) => ({
            tabBarActiveTintColor: 'green',
            //tabBarActiveBackgroundColor: 'blue',
            tabBarLabelStyle:{
                fontSize: 13
            },
            tabBarStyle:{
                borderColor: 'green',
                elevation: 0,
                borderTopWidth: 0,
            },
            tabBarIcon: ({ color, focused }) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                        break;
                    case 'TopTabNavigator':
                        iconName = 'TO'
                        break;
                    case 'StackNavigator':
                        iconName = 'ST'
                        break;    
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
        <BottomTabAndroid.Screen name="Tab1Screen"     options={{title: 'Tab1'}}  component={ Tab1Screen } />
        <BottomTabAndroid.Screen name="TopTabNavigator"options={{title: 'Tab2'}}  component={ TopTabNavigator } />
        <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stacks'}}component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}
 
const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator

        sceneContainerStyle={{
            backgroundColor: 'white',
            
        }}
        screenOptions={ ({route}) => ({
            tabBarActiveTintColor: 'green',
            //tabBarActiveBackgroundColor: 'blue',
            tabBarLabelStyle:{
                fontSize: 13
            },
            tabBarStyle:{
                borderColor: 'green',
                elevation: 0,
                borderTopWidth: 0,
            },
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                        break;
                    case 'Tab2Screen':
                        iconName = 'T2'
                        break;
                    case 'StackNavigator':
                        iconName = 'ST'
                        break;    
                    default:
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
        

        
    >
      {/* <Tab.Screen name="Tab1Screen"     options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabsIOS.Screen name="Tab1Screen"     options={{title: 'Tab1'}}  component={ Tab1Screen } />
      <BottomTabsIOS.Screen name="TopTabNavigator"     options={{title: 'Tab2'}}  component={ TopTabNavigator } />
      <BottomTabsIOS.Screen name="StackNavigator" options={{title: 'Stacks'}}component={ StackNavigator } />
      
    </BottomTabsIOS.Navigator>
  );
}