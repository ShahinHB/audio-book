import React from 'react';
import { View, StyleSheet } from 'react-native';
import AccountBar from '../components/AccountBar';
import RecentlyPlayedAlbums from '../components/RecentlyPlayed';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import BookRecommendationList from '../components/Recommended'; // Import your BookRecommendationList component

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  // Replace with your logic to fetch recently played albums
  const recentlyPlayed = [
    { title: 'Album 1', artworkUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
    { title: 'Album 2', artworkUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
    { title: 'Album 3', artworkUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
  ];

  const handleSearchChange = (text: string) => {
    // Implement search logic here (e.g., filter recentlyPlayed based on text)
    console.log('Search term:', text);
  };

  // Assuming you have an array of books with titles, authors, steamCount, and image URLs
  const books = [
    { title: 'Book Title 1', author: 'Author Name 1', steamCount: 123, imageUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
    { title: 'Book Title 2', author: 'Author Name 2', steamCount: 456, imageUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
    { title: 'Book Title 3', author: 'Author Name 3', steamCount: 444, imageUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png' },
    // ... add more books with their respective image URLs
  ];

  return (
    <View style={styles.container}>
      <AccountBar />
      <SearchBar onChangeText={handleSearchChange} placeholder="Search Music" />
      <RecentlyPlayedAlbums albums={recentlyPlayed} />

      {/* Added your BookRecommendationList component here */}
      <BookRecommendationList books={books} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 100,
  },
});

export default Home;
