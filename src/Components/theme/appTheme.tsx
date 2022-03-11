import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    }
    ,
    resultadoPequeno: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 30,
        textAlign: 'right',
    },

    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
    }
    ,
    botonTexto: {
        color: 'white',
        fontWeight: "300",
        fontSize: 30,
        padding: 10,
        textAlign: 'center',

    }
    ,
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingHorizontal: 10,
    }

})






