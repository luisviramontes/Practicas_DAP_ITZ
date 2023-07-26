import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default function Acerca({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hola mundo desde acerca de...</Text>
            <Button title="Ir a Ajustes"
                onPress={() => {
                    navigation.navigate("Ajustes")
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})