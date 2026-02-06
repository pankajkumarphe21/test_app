import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#dadada",
    width:"100%",
    height:"100%"
  }
})