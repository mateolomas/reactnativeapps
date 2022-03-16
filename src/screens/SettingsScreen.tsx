import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const { authState } = useContext(AuthContext);


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
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            {
                authState.favoriteIcon && (
                    <Icon name={authState.favoriteIcon} size={50} color="black" />)
            }
        </View>
    )
}
