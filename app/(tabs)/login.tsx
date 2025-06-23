import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Login Page</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default LoginScreen