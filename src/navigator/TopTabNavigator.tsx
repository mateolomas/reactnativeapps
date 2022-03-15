import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ marginTop: top }}
            sceneContainerStyle={{ backgroundColor: "white" }}
            tabBarOptions={{
                activeTintColor: 'blue',
                pressColor: 'blue',
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: 'red',
                },
                style: {
                    elevation: 0,
                    shadowColor: 'transparent',
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = "";
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbubbles-outline'
                            break;
                        case 'Contacts':
                            iconName = 'people-outline'
                            break;
                        case 'Albums':
                            iconName = 'albums-outline'
                    }

                    return <Icon name={iconName} size={20} color="gray" />;


                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    )
}


export default TopTabNavigator



