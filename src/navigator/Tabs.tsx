import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "white" }}
            tabBarOptions={{
                activeTintColor: colores.primary,
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    borderTopColor: colores.primary,
                },
                labelStyle: {
                    fontSize: 15,
                }
            }}


            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "";
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home-outline'
                            break;
                        case 'Account':
                            iconName = 'person-outline'
                            break;
                        case 'Settings':
                            iconName = 'settings-outline'
                            break;

                    }
                    return <Icon name={iconName} size={20} color="gray" />;
                }
            })}

        >
            <Tab.Screen name="Home" component={Tab1Screen} />
            <Tab.Screen name="Account" component={TopTabNavigator} />
            <Tab.Screen name="Settings" component={StackNavigator} />
        </Tab.Navigator>
    );
}