import Texto from './componentes/setStateText';
import Imagen from './componentes/imagenes';
import InputText from './componentes/textInput';
import CompBoton from './componentes/boton';
import ListaBotones from './componentes/listaBotones';
import Scroll from './componentes/scrollView';
import Lista from './componentes/Listas';
import ListasT from './componentes/ListasTouch';

import { Text, View, Button, ScrollView, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View>
      
      <ScrollView style={styles.scrollView}>
        <Texto></Texto>
        <Text>Hola mundo desde componente</Text>
        <CompBoton></CompBoton>
        <Imagen></Imagen>
        <InputText></InputText>
        <ListaBotones />
        <Lista />
        <ListasT />
    
      </ScrollView >
    
    </View >



  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,

  },
  scrollView: {
    backgroundColor: 'blue',
    marginHorizontal: 40,
  },
  texto: {
    fontSize: 40,
  }

})