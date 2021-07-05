import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { colors } from '../utils'
import { useDispatch } from 'react-redux'
import { getCoordinates, pending } from '../modules/locales/actions'

export default function SearchCard({ city, state, country, navigation }) {
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(pending())
    dispatch(getCoordinates({ city, navigation }))
  }
  return (
    <TouchableOpacity style={styles.card} onPress={handleSearch}>
      <View style={styles.cardBody}>
        <View style={styles.cardWrapper}>
          <View style={styles.marker} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{city}</Text>
            <Text style={styles.text}>
              {state}, {country}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={28} color={colors.PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: colors.BORDER_COLOR,
    padding: 12,
    margin: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
  marker: {
    height: 56,
    width: 4,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 12,
    justifyContent: 'space-around',
  },
  cardWrapper: {
    flexDirection: 'row',
  },
})
