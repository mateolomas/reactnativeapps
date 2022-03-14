import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculadoraScreen from './src/Components/screens/CalculadoraScreen'

import { styles } from './src/Components/theme/appTheme'
/* import { ContadorScreen } from './src/screens/ContadorScreen'
import HolaMundoScreen from './src/screens/HolaMundoScreen'
 */

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>

  )
}

export default App