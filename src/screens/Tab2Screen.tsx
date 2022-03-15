import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'

const Tab2Screen = () => {


    useEffect(() => { }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab 2</Text>
            <Button
                title="Go to Tab 2"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default Tab2Screen