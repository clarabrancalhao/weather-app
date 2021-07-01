import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Weather from './screens/Weather'
import Home from './screens/Home'
import { colors } from './utils'

const Stack = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Search' }}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{ headerTintColor: colors.PRIMARY_COLOR }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
