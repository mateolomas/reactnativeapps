import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext, AuthState } from '../context/AuthContext';
import { styles } from '../theme/appTheme'

const ContactsScreen = () => {


    const { signIn, authState } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center'
                }}
            >
                ContactsScreen</Text>

            {!authState.isLoggedIn ? <Button title="Sign In" onPress={signIn} /> : <Button title="Sign Out" onPress={signIn} />}
        </View>
    )
}

export default ContactsScreen