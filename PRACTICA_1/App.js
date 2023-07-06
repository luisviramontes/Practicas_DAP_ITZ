import Texto from './componentes/setStateText';
import Imagen from './componentes/imagenes';
import InputText from './componentes/textInput';
import CompBoton from './componentes/boton';
import ListaBotones from './componentes/listaBotones';

import { Text, View ,Button} from 'react-native';

export default function App(){
return(
  <View>
  <Texto></Texto>
  <Text>Hola mundo desde componente</Text>
  <CompBoton></CompBoton>
  <Imagen></Imagen>
  <InputText></InputText>
  <ListaBotones/>
 

  </View>

  

)
}