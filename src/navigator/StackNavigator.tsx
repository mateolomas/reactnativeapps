import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParamList = {
    Home: undefined;
    Notifications: undefined;
    Profile: undefined;
    PersonScreen: {
        id: number, name: string
    }
}


const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    cardStyle: {
                        backgroundColor: 'white'
                    }


                }
            }
        >
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Pagina1Screen} />
            <Stack.Screen name="Notifications" options={{ title: "Notifications" }} component={Pagina2Screen} />
            <Stack.Screen name="Profile" options={{ title: "Profile" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonScreen" options={{ title: "PersonScreen" }} component={PersonScreen} />


        </Stack.Navigator>
    );
}
