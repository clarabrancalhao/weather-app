import React from 'react'
import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

import Search from '../components/Search'
import SearchHistory from '../components/SearchHistory'
import { colors } from '../utils'

export default function Home({ navigation }) {
  const loading = useSelector((state) => state.locales.loading)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    )
  }
  return (
    <View style={styles.body}>
      <Search navigation={navigation} />
      <SearchHistory navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
