
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const BoxObjectModelScreen = () => {
  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>BoxObjectModelScreen</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F"

  }



})



export default BoxObjectModelScreen