import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

interface Album {
  title: string;
  artworkUrl: string;
}

interface RecentlyPlayedAlbumsProps {
  albums: Album[];
}

const RecentlyPlayedAlbums: React.FC<RecentlyPlayedAlbumsProps> = ({
  albums,
}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Recently Played</Text>
      <FlatList
        data={albums}
        horizontal={true} // Display items horizontally
        renderItem={({ item }) => (
          <View style={styles.albumItem}>
            {item.artworkUrl && (
              <Image
                source={{ uri: item.artworkUrl }}
                style={styles.albumImage}
              />
            )}
            <Text style={styles.albumTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    marginTop: -35
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10, // Add some space below the heading
  },
  albumItem: {
    flexDirection: "column", // Display items vertically
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 10, // Add some space between albums
  },
  albumImage: {
    width: 101,
    height: 81,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 5, // Add some space between image and title
  },
  albumTitle: {
    color: "white",
  },
});

export default RecentlyPlayedAlbums;
