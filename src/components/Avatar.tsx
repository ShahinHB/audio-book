import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';

interface AvatarProps {
  fullName: string;
  membership: string;
}

export default class Avatar extends Component<AvatarProps> {
  render() {
    const { fullName, membership } = this.props;

    return (
      <View style={styles.profileBar}>
        <Image style={styles.image} source={{uri: './test.png'}} />
            <View style={styles.textContainer}>
                <Text style={styles.fullName}>{fullName}</Text>
                <Text style={styles.membership}>{membership}</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    profileBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      gap: 7,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    textContainer: {
        marginLeft: 10,
        flex: 1,
    },
    fullName: {
        fontSize: 18,
        color: '#F2F2F2',
    },
    membership: {
        fontSize: 14,
        color: '#DEDEDE',
    },
});