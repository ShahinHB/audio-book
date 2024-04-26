import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const FavouriteMusic = ({ favouriteMusic }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite Music</Text>
      <View style={styles.musicContainer}>
        {/* Split the favouriteMusic array into chunks of 3 and map over them */}
        {chunkArray(favouriteMusic, 3).map((row, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {/* Map over each row and render the images */}
            {row.map((imageUrl, index) => (
              <Image key={index} source={{ uri: imageUrl }} style={styles.musicImage} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

// Function to split an array into chunks of a specified size
const chunkArray = (arr, size) => {
  return arr.reduce((chunks, el, i) => (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el])) && chunks, []);
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
  musicContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  musicImage: {
    width: 106,
    height: 111,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 10
  },
});

export default FavouriteMusic;
