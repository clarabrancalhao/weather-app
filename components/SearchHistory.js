import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchCard from './SearchCard'

export default function SearchHistory() {
  return (
    <View>
      <Text style={styles.title}>Previous Searches</Text>
      <View>
        <SearchCard city="Florianópolis" state="SC" country="Brazil" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: '700',
  },
})
