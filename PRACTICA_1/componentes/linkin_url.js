import React, { useState, useEffect } from "react";
import { Button, Linking, StyleSheet, View,Text } from "react-native";

const useInitialURL = () => {
    const [url, setUrl] = useState(null);
    const [proccessing, setPreocessing] = useState(true);

    useEffect(() => {
        const getUrlAsync = async () => {
            const initialUrl = await Linking.getInitialURL();

            setTimeout(() => {
                setUrl(initialUrl);
                setPreocessing(false);
            }, 1000);
        };
        getUrlAsync();
    }, []);
    return { url, proccessing }
};

const App = () => {
    const { url: initialUrl, proccessing } = useInitialURL();
    return (
        <View style={styles.container}>
            <Text>
                {proccessing
                    ? 'Procesando la url inicial desde un enlace profundo'
                    : `El enlace es : ${initialUrl || 'Ninguno'}`}'
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App;