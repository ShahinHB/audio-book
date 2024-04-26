import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';
import UserInformation from '../components/UserInformation';
import FavouriteAlbum from '../components/FavouriteAlbum';
import FavouriteMusic from '../components/FavouriteMusic';
import { useNavigation } from '@react-navigation/native';


// const HeaderLeft: React.FC<{ onPress?: void }> = ({ onPress }) => {
//   return (
//     <Pressable onPress={onPress}>
//       {/* add back icon png to here from ../../assets/icons/left-arrow.png*/}
//     </Pressable>
//   );
// };

const UserProfile = () => {
  const navigation = useNavigation();

  // Define the user data object
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    userId: '132fdsaq321',
    membership: 'Premium',
    bio: 'Lorem ipsum dolor sit amet',
    imageUrl: 'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
    favouriteAlbums: [
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
    ],
    favouriteMusic: [
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
      'https://www.bogatepemandira.com/images/urunler/test-urun--145-16082397730-1000.png',
    ],
  };

  return (
    <View style={styles.container}>
      
      <UserInformation
        name={userData.name}
        email={userData.email}
        membership={userData.membership}
        bio={userData.bio}
        imageUrl={userData.imageUrl}
      />
      <FavouriteAlbum favouriteAlbums={userData.favouriteAlbums} />
      <FavouriteMusic favouriteMusic={userData.favouriteMusic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
