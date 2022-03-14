import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigator'
import 'react-native-gesture-handler'
import { DrawerLeftMenuBasic } from './src/navigator/DrawerLeftMenuBasic'

const App = () => {
  return (
    <NavigationContainer>
      {/*   <DrawerLeftMenuBasic /> */}
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App