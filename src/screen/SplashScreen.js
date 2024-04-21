import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Color, F } from '../assets/styles/colorsFonts'
import { horizontalScale, scaleFontSize, verticalScale } from '../assets/styles/scalling'
import { Splash, logo } from '../assets/image'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
const navigation=useNavigation()
  const handledGoto=()=>{
    setTimeout(()=>{
       navigation.navigate('language')
    },2000)
  }
  useEffect(()=>{
    handledGoto()
  },[])
  return (
  <SafeAreaView style={styles.container}>
    <LinearGradient colors={[Color.SKY_BLUE,Color.WHITE]} style={styles.container}>
       <View style={styles.logoContainer}>
        <Image source={logo} style={styles.Logo}/>
        <Text style={styles.txt}>“Discover the heart of the community at  E-Santha”</Text>
       </View>
       <View style={styles.splashContainer}>
        <Image source={Splash} style={styles.splashImg}/>
       </View>
    </LinearGradient>
  </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    // flex:1,
    width:'100%',
   alignItems:"center",
   justifyContent:"center"
  },
  Logo:{
    width:verticalScale(100),
    height:horizontalScale(100),
    resizeMode:'contain'
  },
  logoContainer:{
    justifyContent:"center",
    alignItems:"center",
    height:verticalScale(300),
    marginBottom:verticalScale(60)
  },
  txt:{
    fontFamily:F.f3,
    fontSize:scaleFontSize(14),
    lineHeight:scaleFontSize(16),
    textAlign:"center",
    marginHorizontal:horizontalScale(10),
    color:Color.BLACK,
    marginTop:verticalScale(15)
  },
  splashContainer:{
    alignItems:"center",
    justifyContent:"center",
    height:verticalScale(300),
    marginTop:verticalScale(20)
  },
  splashImg:{
    width:horizontalScale(350),
    height:verticalScale(300),
    resizeMode:'cover'
  }
})