import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface Book {
  title: string;
  author: string;
  steamCount: number;
  imageUrl?: string; // Optional for future use
}

interface Props {
  books: Book[];
}

const BookRecommendationList: React.FC<Props> = ({ books }) => {
  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.bookItem}>
      <View style={styles.bookImageContainer}>
        {item.imageUrl && (
          <Image source={{ uri: item.imageUrl }} style={styles.bookImage} />
        )}
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <Text style={styles.bookSteamCount}>{item.steamCount}k/steams</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <Text style={styles.header}>Recommended for You</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.bookListContainer} // Apply styles to the list container
      />
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        marginTop: -60
    },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,
    color: 'white', // Adjust color as needed
  },
  bookItem: {
    flexDirection: 'row', // Arrange image and text content horizontally
    marginBottom: 16,
    borderRadius: 4, // Optional border radius for book items
    shadowColor: '#ddd', // Optional shadow for book items
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2, // Adjust shadow properties as needed
  },
  bookImageContainer: {
    width: 90, // Adjust width to accommodate image
    marginRight: 10, // Add spacing between image and text content
  },
  bookImage: {
    width: 88, // Stretch image to fill container width
    height: 88, // Adjust image height as needed
    resizeMode: 'cover', // Cover mode for image scaling
    borderRadius: 4, // Optional border radius for the image
  },
  bookInfo: {
    flex: 1, // Take remaining space for text content
    justifyContent: 'center', // Vertically center text content
    padding: 10,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#F2F2F2',
  },
  bookAuthor: {
    fontSize: 13,
    marginBottom: 4,
    color: '#DEDEDE',
  },
  bookSteamCount: {
    fontSize: 13,
    color: '#DEDEDE',
  },
  bookListContainer: {
    paddingHorizontal: 16, // Add horizontal padding for the list container
  },
});

export default BookRecommendationList;
