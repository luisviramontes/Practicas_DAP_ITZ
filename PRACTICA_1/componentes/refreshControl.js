import React from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

const App = () => {
    const [refrescar, setRefrescar] = React.useState(false);

    const OnRefresh = React.useCallback(() => {
        setRefrescar(true);
        setTimeout(() => {
            setRefrescar(false);
        }, 2000)
    })

    return (
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refrescar} onRefresh={OnRefresh} />
                }>
                <Text>Texto o componentes que se desean refrescar </Text>
            </ScrollView>       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        
    }
});

export default App;