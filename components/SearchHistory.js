import React from 'react'
import { View, Text } from 'react-native'

import SearchCard from './SearchCard'

export default function SearchHistory() {
  return (
    <View>
      <Text>Previous Searches</Text>
      <View>
        <SearchCard city={Florianópolis} state={SC} country={Brazil} />
      </View>
    </View>
  )
}
