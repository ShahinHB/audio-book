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
            <Image style={styles.image} source={{uri: 'https://media.licdn.com/dms/image/D4E03AQFDDNumKzOjOw/profile-displayphoto-shrink_400_400/0/1674937590489?e=1717632000&v=beta&t=DrmmPE5SRuSiULEwQcDUFEaPRrMwJAIIXt99A-RDChQ'}} />
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
      // padding: 10,
      gap: 10,
      flex: 1,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    textContainer: {
        marginLeft: 10,
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
