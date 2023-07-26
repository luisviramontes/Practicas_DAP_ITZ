import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native";

const ButtonExample = () => {

    useEffect(() => {
        alert('Termino de renderizar el contenido y ejecuto el useefefect');

    })
    return (
        <View style={styles.container}>
            <Button
                title="Boton"
                color="#f194ff"
                onPress={() => alert('Haz presionado un botón')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    }
})

export default ButtonExample;