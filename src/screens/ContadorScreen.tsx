import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import Fab from '../Components/Fab';


export const ContadorScreen = () => {
  const [state, setState] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {state}</Text>

      <Fab
        title="+10"
        onPress={() => setState(state + 1)}
        position="br"
      />


      <Fab
        title="-1"
        onPress={() => setState(state - 1)}
        position="bl"
      />
      {/*<TouchableOpacity style={styles.buttonLocationBL} onPress={() => setState(state - 1)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+1</Text>
        </View>
  </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -15,
  },

  buttonLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },

  buttonLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },

  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    padding: 10,
    margin: 10,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
  },
});
