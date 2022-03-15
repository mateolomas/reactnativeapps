import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab 1</Text>
            <Button title="Go to Tab 2" onPress={() => { }} />
            <Text>
                <Icon name="airplane-outline" size={80} color="black" />;
                <Icon name="arrow-forward-circle-outline" size={80} color="blue" />;
                <Icon name="arrow-back-circle-outline" size={80} color="red" />;
                <Icon name="arrow-up-circle-outline" size={80} color="green" />;
                <Icon name="beer-outline" size={80} color="blue" />;
            </Text>
        </View>
    );
};

export default Tab1Screen;
