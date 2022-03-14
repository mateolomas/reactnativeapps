import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
interface Props extends StackScreenProps<any, any> { }


const Pagina3Screen = ({ navigation }: Props) => {
    return (

        <View>
            <Text style={styles.title}>Pagina3Screen</Text>

            <Button title="Regresar a Home" onPress={() => navigation.popToTop()} />
            <Button title="Ir a Pagina 2" onPress={() => navigation.navigate('Notifications')} />
        </View>
    )
}

export default Pagina3Screen