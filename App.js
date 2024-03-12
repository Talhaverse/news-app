import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import {createStackNavigator, assets} from '@react-navigation/stack';
import Homepage from './Home';
import {Platform} from 'react-native';
import {useFonts} from 'expo-font';
import {AppLoading} from 'expo';
import Header from './Header';

 
const Stack = createStackNavigator();


export default function App() {
let [fontsLoaded] = useFonts({
'openSans': require('./assets/OpenSans-Semibold.ttf'),
});
if (!fontsLoaded){
  return <AppLoading/>;
} else {

  return (
    <NavigationContainer style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0}} >
      <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
         </Stack.Navigator>
      <Stack.Screen 
      name="Globomantics"
      component={Homepage}>
        options={{
          header: () => <Header headerDisplay="Globomantics"/>
        }}
      </Stack.Screen>
    </NavigationContainer>
  );
}
}