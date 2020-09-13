import React from 'react'
import {View,Text} from 'react-native'
function app(){
  return(
    <View style={{
      justifyContent:"center",
      flex:1,
      lingnItems:"center"
    }}>
      <Text style={{color:"red",fontSize:"50px",fonWeight:"bold"}}>I love my cat</Text>
    </View>
  )
}
export default app;