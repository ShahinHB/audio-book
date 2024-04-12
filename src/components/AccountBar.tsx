import { Image, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Avatar from './Avatar';

export default class AccountBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar fullName="John Doe" membership="Gold Member" />
        <Image style={styles.notification} source={require('../../assets/icons/notification.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap'
  },
  notification: {
    width: 24,
    height: 24,
  }
});
