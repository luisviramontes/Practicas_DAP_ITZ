import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const App = () => {
    const [habilitado, SetHabilitado] = useState(false);
    const [texto_habilitado, SettextoHabilitado] = useState('INACTIVO');

    function cambiarTexto() {
        SetHabilitado(previusState => !previusState);
        if (texto_habilitado == "INACTIVO") {
            SettextoHabilitado('ACTIVO')
        } else {
            SettextoHabilitado('INACTIVO')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Estado: {texto_habilitado}</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={habilitado ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={cambiarTexto}
                value={habilitado}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default App;