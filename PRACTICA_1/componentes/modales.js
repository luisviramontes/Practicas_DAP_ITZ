import React, { seState, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.CentrarView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('El modal ha sido cerrado');
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.CentrarView}>
                    <View style={styles.VistaModal}>
                        <Text style={styles.modaltexto}>Hola mundo desde un modal!</Text>
                        <Pressable
                            onPress={() => {
                                setModalVisible(!modalVisible)
                            }}
                            style={[styles.boton, styles.botonCierra]}>
                            <Text style={styles.texto}>Cerrar Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.boton, styles.botonAbre]}
                onPress={() => {
                    setModalVisible(true)
                }}>
                <Text style={styles.texto}>Mostrar modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    CentrarView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    VistaModal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    boton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    botonAbre: {
        backgroundColor: '#F194FF',
    },
    botonCierra: {
        backgroundColor: '#2196f3',
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modaltexto: {
        marginBottom: 15,
        textAlign: 'center',
    }
})

export default App;