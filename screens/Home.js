import React from 'react'
import { View, StyleSheet } from 'react-native'

import Search from '../components/Search'
import SearchHistory from '../components/SearchHistory'

export default function Home() {
  return (
    <View style={styles.body}>
      <Search />
      <SearchHistory />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
})
