import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ currentWeather, unitSystem }) {
  const windSpeed = currentWeather.wind
    ? unitSystem === 'metric'
      ? `${Math.round(currentWeather?.wind.speed)}m/s`
      : `${Math.round(currentWeather?.wind.speed)}miles/h`
    : 'loading'

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={24} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels like: </Text>
              <Text style={styles.textSecondary}>
                {currentWeather?.main.feels_like}°{unitSystem === 'metric' ? 'C' : 'F'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Ionicons name="water-sharp" size={28} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity: </Text>
              <Text style={styles.textSecondary}>{currentWeather?.main.humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopColor: BORDER_COLOR,
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="wind" size={24} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind speed: </Text>
              <Text style={styles.textSecondary}>{windSpeed}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Ionicons name="speedometer-outline" size={28} color={PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Pressure: </Text>
              <Text style={styles.textSecondary}>{currentWeather?.main.pressure}hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textSecondary: {
    fontSize: 14,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7,
  },
})
