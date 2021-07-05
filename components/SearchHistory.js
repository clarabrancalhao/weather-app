import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import SearchCard from './SearchCard'

export default function SearchHistory({ navigation }) {
  const localesHistory = useSelector((state) => state.locales.localesHistory)
  return (
    <View>
      <Text style={styles.title}>Previous Searches</Text>
      <View>
        {localesHistory.map((locale) => (
          <SearchCard
            key={locale.city}
            city={locale.city}
            state={locale.state}
            country={locale.country}
            navigation={navigation}
          />
        ))}
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
