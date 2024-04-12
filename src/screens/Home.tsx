import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../components/Avatar';
import AccountBar from '../components/AccountBar';
import RecentlyPlayedAlbums from '../components/RecentlyPlayedAlbums';

export default function Home() {
  // Replace with your logic to fetch recently played albums
  const recentlyPlayed = [
    { title: 'Album 1', artworkUrl: 'https://example.com/album1.jpg' },
    { title: 'Album 2', artworkUrl: 'https://example.com/album2.jpg' },
  ];

  return (
    <View>
      <AccountBar />
      <RecentlyPlayedAlbums albums={recentlyPlayed} />
    </View>
  );
}
