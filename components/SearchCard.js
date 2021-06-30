import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils'

export default function SearchCard({ city, state, country }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{city}</Text>
      <Text style={styles.text}>
        {state},{country}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: colors.BORDER_COLOR,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
})
