import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {
}


const Pagina1Screen = ({ navigation }: Props) => {


    return (

        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button title="Ir a Pagina 2" onPress={() => navigation.navigate('Notifications')} />
        </View>
    )
}

export default Pagina1Screen