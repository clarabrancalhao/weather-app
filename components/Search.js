import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import { useDispatch } from 'react-redux'
import { colors } from '../utils'
import { Foundation } from '@expo/vector-icons'
import Stack from '@react-navigation/stack'

import {
  getCoordinates,
  getCoordinatesCompleted,
  getCurrentLocale,
  pending,
} from '../modules/locales/actions'

export default function Search({ navigation }) {
  const [city, setCity] = useState()
  const dispatch = useDispatch()

  const handleInputChange = (value) => {
    setCity(value)
  }

  const handleSubmitCity = () => {
    dispatch(pending())
    dispatch(getCoordinates({ city, navigation }))
  }

  const handleCurrentLocation = async () => {
    dispatch(pending())
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMessage('Access to location is needed to run the app')
      return
    }

    const location = await Location.getCurrentPositionAsync()
    const { latitude, longitude } = location.coords

    dispatch(getCoordinatesCompleted({ lat: latitude, lng: longitude }))

    dispatch(getCurrentLocale({ latitude, longitude, navigation }))

    navigation.push('Weather')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Type your location here:</Text>
      <TextInput style={styles.input} onChangeText={handleInputChange} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmitCity}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCurrentLocation}>
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
