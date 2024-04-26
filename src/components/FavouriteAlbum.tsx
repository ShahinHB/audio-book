import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const FavouriteAlbum = ({ favouriteAlbums }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite Albums</Text>
      <View style={styles.albumContainer}>
        {/* Map over the favouriteAlbums array and render each album image */}
        {favouriteAlbums.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.albumImage} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "white"
  },
  albumContainer: {
    flexDirection: 'row',
  },
  albumImage: {
    width: 106,
    height: 111,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 10
  },
});

export default FavouriteAlbum;
