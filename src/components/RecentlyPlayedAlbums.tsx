import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';

const RecentlyPlayedAlbums = ({ albums }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recently Played</Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <AlbumItem title={item.title} artworkUrl={item.artworkUrl} />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const AlbumItem = ({ title, artworkUrl }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      {artworkUrl && <Image source={{ uri: artworkUrl }} style={{ width: 50, height: 50, marginRight: 10 }} />}
      <Text>{title}</Text>
    </View>
  );
};

export default RecentlyPlayedAlbums;
