import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const SplashScreen = () => {
  const [scree,setScreen]=useState(Dimensions.get('screen'))
console.log(scree);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})