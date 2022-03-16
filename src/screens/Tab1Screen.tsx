import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../Components/TouchableIcon';

const Tab1Screen = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab 1</Text>
            <Button title="Go to Tab 2" onPress={() => { }} />
            <Text>
                <TouchableIcon name="airplane-outline" />
                <TouchableIcon name="arrow-forward-circle-outline" />
                <TouchableIcon name="arrow-back-circle-outline" />
                <TouchableIcon name="arrow-up-circle-outline" />
                <TouchableIcon name="beer-outline" />
            </Text>
        </View>
    );
};

export default Tab1Screen;
