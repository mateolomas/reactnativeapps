import React from 'react'
import { View, Text } from 'react-native'


const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Hello React Native</Text>
                
      </View>
  )
}

export default HolaMundoScreen