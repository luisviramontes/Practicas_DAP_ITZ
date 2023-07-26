import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ActivityIndicator, TouchableHighlight, ScrollView, RefreshControl } from "react-native"
import Carousel, { Pagination } from 'react-native-reanimated-carousel'
import { Button, Box, Heading, AspectRatio, FormControl, Center, HStack, Stack, NativeBaseProvider, Spinner, Icon } from "native-base"
export const SLIDER_WIDTH = Dimensions.get('window').width + 120;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.70);

//importamos estas liberias para poder consumir nuestra app local 
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;

export default function App({ navigation }) {
    const [cargando, setCargando] = useState(true);
    const [avisos, setAvisos] = useState([]);
    const [index_carr, setIndex] = useState(0);
    const [refrescar, setRefrescar] = React.useState(false);



    const CarouselCardItem = ({ item }) => {
        return (

            <TouchableHighlight
                key={item.id}
                activeOpacity={0.6}
                onPress={() =>
                    navigation.navigate('DetalleAvisos', {
                        id: item._id
                    })
                }
                underlayColor="#DDDDDD">
                <View style={styles.container} key={item._id}>
                    <Image
                        source={{
                            uri: item.url_imagen,
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.header}>{item.nombre}</Text>
                    <Text style={styles.body}>{item.descripcion}</Text>
                </View>
            </TouchableHighlight>
        )

    }


    const cargarDatos = async () => {
        setRefrescar(true);
        alert('entro a cargar datos');
        console.log('url: ' + uri);
        // la api de donde al realizar la peticion get obtendremos los datos de la llamada
        const respuesta = await fetch(uri + 'listar_avisos')
        const datos = await respuesta.json()
        console.log(datos.avisos);
        setAvisos(datos.avisos);
        setCargando(false);
        setRefrescar(false);
    }

    useEffect(() => {
        alert('Termino de renderizar la app');
        cargarDatos();
    }, [])




    const isCarousel = React.useRef(null);

    if (cargando) {
        return (
            <NativeBaseProvider>
                <Center flex={1} px="3">
                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="Loading posts" />
                        <Heading color="primary.500" fontSize="md">
                            Cargando aplicación...
                        </Heading>
                    </HStack>
                </Center>
            </NativeBaseProvider>
        )
    } else {
        //el contenido termino de cargar
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refrescar} onRefresh={cargarDatos} />
                }>
                <View>
                    <Carousel
                        layout="default"
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={avisos}
                        renderItem={({ item }) => {
                            return <CarouselCardItem item={item} />
                        }}
                        width={SLIDER_WIDTH}
                        height={ITEM_WIDTH}
                        useScrollView={true}
                        onSnapToItem={(index) => setIndex(index)}
                        inactiveSlideShift={0}
                    />
                </View>
            </ScrollView>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 30,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 250,
        resizeMode: 'stretch',
    },
    header: {
        color: "#222",
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 12,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    titulo: {
        fontSize: 22,
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color: '#rgb(151, 132 , 102)',
        fontWeight: "bold",
        alignSelf: 'center',
        fontFamily: "sans-serif",
    },
    scrollView: {
        flex: 1,      
        alignItems: 'center',
        
    }
})
