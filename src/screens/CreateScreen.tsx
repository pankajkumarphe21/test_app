import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CreateScreen = () => {
  const [itemName, setItemName] = useState("");
  const [stock,setStock] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name...'
        placeholderTextColor='#999'
        style={styles.input}
        value={itemName}
        onChangeText={(item)=>setItemName(item)}
      />
      <TextInput
        placeholder='Enter stock here...'
        placeholderTextColor='#999'
        style={styles.input}
        value={stock}
        onChangeText={(item)=>setStock(item)}
      />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container:{
    paddingVertical:"4%",
    gap:10
  },
  input:{
    borderWidth:1,
    borderColor:"gray",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7
  }
})