import React from 'react'
import { View, StyleSheet } from 'react-native'

import Search from '../components/Search'
import SearchHistory from '../components/SearchHistory'

export default function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <Search navigation={navigation} />
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
