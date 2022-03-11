import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

const Fab = ({ title, onPress, position = 'br' }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonLocation,
        position === 'br' ? styles.right : styles.left,
      ]}
      onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

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

  buttonLocation: {
    position: 'absolute',
    bottom: 25,
  },

  left: {
    left: 25,
  },

  right: {
    right: 25,
  },

  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    padding: 10,
    margin: 10,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
  },
});
