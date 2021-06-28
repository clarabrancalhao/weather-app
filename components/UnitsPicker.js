import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(value) => setUnitSystem(value)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}>
        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    left: 20,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),
    height: 50,
    width: 100,
  },
})

export default UnitsPicker
