import React, { useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setSatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeSatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setSatusBarStyle(STYLES[0]);
        } else {
            setSatusBarStyle(STYLES[styleId]);
        }
    }

    const changeSatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />
            <Text style={styles.textStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'Hidden' : 'Visible'
                }
            </Text>
            <Text style={styles.textStyle}>
                StatusBar Style:{'\n'}
                {statusBarStyle}
            </Text>
            {Platform.OS === "ios" ? (
                <Text style={styles.textStyle}>
                    StatusBar Transition: {'\n'}
                    {statusBarTransition}
                </Text>
            ) : null
            }
            <View>
                <Button title="Mostrar StatusBar" onPress={changeStatusBarVisibility} />
                <Button title="Cambiar Estilo de barra"
                    onPress={changeSatusBarStyle} />
                {Platform.OS === "ios" ? (
                    <Button title="Cambiar transicion de barra" onPress={changeSatusBarTransition} />
                ) : null}
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ECF0F1",
    },
    buttons: {
        padding: 10,
    },
    texto: {
        textAlign: 'center',
        marginBottom: 8,
    },
})

export default App;