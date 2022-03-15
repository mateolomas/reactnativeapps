import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'

const Tab3Screen = () => {

    useEffect(() => { }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab 3</Text>
            <Button
                title="Go to Tab 2"
                onPress={() => { }
                }
            />
        </View>
    )
}

export default Tab3Screen