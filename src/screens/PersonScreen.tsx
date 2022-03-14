import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { useEffect } from 'react';




interface Props extends StackScreenProps<RootStackParamList, 'PersonScreen'> { };

const PersonScreen = ({ route, navigation }: Props) => {


    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })

    }, [])



    return (
        <>
            <Text>PersonScreen</Text>
            <Text>{params.id}</Text>
            <Text>{params.name}</Text>

        </>
    )
}

export default PersonScreen