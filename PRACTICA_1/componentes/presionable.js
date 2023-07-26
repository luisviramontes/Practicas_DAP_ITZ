import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const App = () => {
    const [tiempoPresionado, setTiempoPresionado] = useState(0);
    let textoLong = "";
    if (tiempoPresionado > 1) {
        textoLong = tiempoPresionado + " segundos presionados";

    } else {
        textoLong = "Presioname";
    }
    return (
        <View style={styles.container}>
            <Pressable
                delayLongPress={100}
                onPress={() => {
                    setTiempoPresionado(current => current + 1)
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210,230,255)' : 'white',
                    }, styles.espacio,]}>
                {({ pressed }) => (
                    <Text style={styles.texto}>Presioname</Text>
                )}
            </Pressable>
            <View style={styles.caja}>
                <Text>{textoLong}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    texto: {
        fontSize: 16,
    },
    espacio: {
        borderRadius: 8,
        padding: 6,
    },
    caja: {
        padding: 20,
        margin: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    }

})

export default App;