import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { checked_soild, fill_Check, logo } from '../assets/image'
import { horizontalScale, scaleFontSize, verticalScale } from '../assets/styles/scalling'
import { Color, F } from '../assets/styles/colorsFonts'
import { language } from '../constants/staticData'
import { useNavigation } from '@react-navigation/native'

const languageScreen = () => {
  const [check,setCheck]=useState(0)
  const navigation=useNavigation()
  const handledClick=(item)=>{
      setCheck(item)
  }
  const CheckClick=()=>{
    navigation.navigate('login')
  }
  return (
   <SafeAreaView style={{width:'100%',height:"100%",backgroundColor:Color.WHITE}}>
    <View style={styles.imgContainer}>
      <Image source={logo} style={styles.img}/>
      </View>
      <Text style={styles.txt1}>Welcome to E-Santha</Text>
      <View>
        <Text style={styles.txt2}>Choose your Language</Text>
      </View>
      <View style={styles.scroll}>
        <View style={styles.btnContainer}>
        {language?.map((item,index)=>{
          return(
        <TouchableOpacity 
        key={index}
        onPress={()=>{
          setCheck(item)
          handledClick(item?.id)
        }}
        style={styles.btn}>
                  <View style={styles.checkContainer}>
         <Text style={styles.btnText}>{item?.name}</Text>
          <View>
            <Image source={check == item?.id ? checked_soild:fill_Check}
            style={styles.checkIcon}/>
          </View>
          </View>

        </TouchableOpacity>
            )})}
    <Text style={styles.bottomTxt}>Your language preference can be changed at any time in Account Setting</Text>

      </View>
<View>
  <TouchableOpacity style={styles.contineBtn} onPress={()=>CheckClick()}>
    <Text style={styles.contineBtnTxt}>Continue</Text>
  </TouchableOpacity>
</View>
    </View>
   </SafeAreaView>
  )
}

export default languageScreen

const styles = StyleSheet.create({
  img:{
    width:horizontalScale(100),
    height:verticalScale(100),
    resizeMode:"contain"
  },
  imgContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:verticalScale(10)
  },
  txt1:{
    fontFamily:F.f6,
    fontSize:scaleFontSize(24),
    textAlign:'center',
    lineHeight:scaleFontSize(24),
    color:Color.PRIMARY,
    marginTop:verticalScale(10)
  },
  txt2:{
    fontFamily:F.f5,
    fontSize:scaleFontSize(20),
    color:Color.BLACK,
    textAlign:'center',
    marginTop:verticalScale(10),
    lineHeight:scaleFontSize(20)
  },
  btn:{
    borderWidth:2,
    borderColor:Color.LIGHTPRIMARY,
    width:'100%',
    paddingHorizontal:horizontalScale(20),
    paddingVertical:verticalScale(10),
    borderRadius:10,
    // alignItems:'center',
    // justifyContent:'flex-start',
    marginTop:verticalScale(15)
    
  },
  btnText:{
    fontFamily:F.f3,
    fontSize:scaleFontSize(16),
    color:Color.LIGHTPRIMARY,
    lineHeight:scaleFontSize(22)

  },
  btnContainer:{
    width:'100%',
    height:"55%",
    // marginTop:verticalScale(30)
  },
 checkIcon:{
  width:verticalScale(20),
  height:horizontalScale(20),
  resizeMode:'contain'
 },
 checkContainer:{
  flexDirection:"row",
  justifyContent:'space-between'
 },
 bottomTxt:{
  fontFamily:F.f3,
  fontSize:scaleFontSize(15),
  color:Color.BLACK,
  textAlign:"center",
  lineHeight:scaleFontSize(18),
  marginTop:verticalScale(20),
  paddingHorizontal:horizontalScale(10)
 },
 contineBtn:{
  paddingHorizontal:horizontalScale(120),
  paddingVertical:verticalScale(15),
  backgroundColor:Color.LIGHTPRIMARY,
  borderRadius:15,
  // marginTop:verticalScale(10),
  alignItems:'center',
  justifyContent:"center",
  marginTop:verticalScale(20)

 },
 contineBtnTxt:{
  fontFamily:F.f5,
  color:Color.WHITE,
  textAlign:'center',
  lineHeight:scaleFontSize(20),
  fontSize:scaleFontSize(18),
 },
 scroll:{
  width:"100%",
  height:"100%",
  paddingTop:verticalScale(30),
  alignItems:'center',
  paddingHorizontal:horizontalScale(10)
 }
})