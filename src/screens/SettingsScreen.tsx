import React from 'react'
import { Text, View, Button } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';


export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={styles.title}>Settings Screen</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Pagina1Screen')}
            />
        </View>
    )
}
