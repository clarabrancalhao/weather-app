import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import WeatherInfo from '../components/WeatherInfo'
import WeatherDetails from '../components/WeatherDetails'
import UnitsPicker from '../components/UnitsPicker'
import ReloadIcon from '../components/ReloadIcon'
import { colors } from '../utils'

const WEATHER_API_KEY = '1b3cb5484b78327975c16e3d52e8f3ce'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function Weather() {
  const [errorMessage, setErrorMessage] = useState()
  const [currentWeather, setCurrentWeather] = useState()
  const [unitSystem, setUnitSystem] = useState('metric')

  const coordinates = useSelector((state) => state.locales)

  const load = async () => {
    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      const weatherUrl = `${BASE_WEATHER_URL}lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)
      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      }
      if (!response.ok) {
        setErrorMessage(result.message)
      }
    } catch (err) {
      setErrorMessage(err.message)
    }
  }
  useEffect(() => {
    load()
  }, [unitSystem])

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load} />
          <WeatherInfo
            currentWeather={currentWeather}
            unitSystem={unitSystem}
          />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitSystem={unitSystem}
        />
      </View>
    )
  }
  if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load} />
        <Text style={{ textAlign: 'center' }}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  },
})
