import { Image, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Avatar from './Avatar'

export default class AccountBar extends Component {
  render() {
    return (
      <View>
        <Avatar/>
        <Image style={styles.notification} source={require('../../assets/icons/bell.svg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notification: {
    width: 10,
    height: 10,
    color:"white",
    backgroundColor: "red"
  }
})