import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {

    const { signOut, signIn, authState } = useContext(AuthContext);


    return (
        <View>
            <Text>AlbumsScreen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {authState.isLoggedIn ? <Button title="Sign Out" onPress={signOut} /> : <Button title="Sign In" onPress={signIn} />}

        </View>
    );
};

export default AlbumsScreen;
