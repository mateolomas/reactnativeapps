import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'


const TareaBoxesScreen = () => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.caja1}>Caja 1</Text>
                <Text style={styles.caja2}>Caja 2</Text>
                <Text style={styles.caja3}>Caja 3</Text>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
    },
    container: {
        flex: 1,
        backgroundColor: "#F5F",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",



    },
    caja1: {
        backgroundColor: "#F00",
        borderWidth: 5,
        width: 100,
        height: 100,



    },
    caja2: {
        backgroundColor: "#0F0",
        borderWidth: 5,
        width: 100,
        height: 100,
        top: 50,


    },
    caja3: {
        backgroundColor: "#00F",
        borderWidth: 5,
        width: 100,
        height: 100,
    },



})

export default TareaBoxesScreen