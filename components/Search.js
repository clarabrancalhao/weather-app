import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { colors } from '../utils'
import { Foundation } from '@expo/vector-icons'

export default function Search() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Type your location here:</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Foundation name="target-two" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    margin: 12,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    borderColor: colors.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginTop: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 18,
    borderRadius: 12,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
