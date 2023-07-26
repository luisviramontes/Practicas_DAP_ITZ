import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/inicio/inicio';
import Acerca from './src/acerca/acerca';
import Ajustes from './src/ajustes/ajustes';


function LogoTitulo() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/home.png')}
    />
  )
}
const Stack = createNativeStackNavigator();


function App({ navigation }) {
  const [textojAustes, setTextoAjustes] = React.useState("Hola mundo desde Ajustes");
  //donde se envia el textoAjustes a el componente Ajustes 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ajustes">
        <Stack.Screen name="Ajustes">
          {props => <Ajustes {...props} textojAustes={textojAustes} setTextoAjustes={setTextoAjustes} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: 'Acerca de la APP',
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: '#fff'
          }
          } name="Acerca" component={Acerca} />

        <Stack.Screen
         options={{
          title: 'Bienvenido al Inicio',
          headerStyle: {
            backgroundColor: "pink",

          },
          headerTitle:(props) => <LogoTitulo {...props} />
        }} name="Inicio" component={Inicio} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;