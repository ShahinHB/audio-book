import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface UserProfileProps {
  name: string;
  email: string;
  membership: string;
  bio: string;
  imageUrl: string; // Add imageUrl to props
}

const UserInformation = ({ name, email, membership, bio, imageUrl }: UserProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.membership}>{membership}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20
  },
  leftContainer: {
    marginRight: 20,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 91,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2F2F2',
  },
  email: {
    fontSize: 16,
    marginBottom: 11,
    color: '#8E8E8E',
  },
  membership: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 11,
    color: '#8E8E8E',
  },
  bio: {
    fontSize: 16,
    color: '#8E8E8E',
  },
});

export default UserInformation;
