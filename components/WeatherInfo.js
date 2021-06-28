import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils'

function WeatherInfo({ currentWeather, unitSystem }) {
  const {
    main: { temp },
    weather: [detail],
    name,
  } = currentWeather

  const { icon, main, description } = detail
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>
        {temp}°{unitSystem === 'metric' ? 'C' : 'F'}
      </Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
  textPrimary: {
    fontSize: 40,
    color: colors.PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: colors.SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10,
  },
})

export default WeatherInfo
