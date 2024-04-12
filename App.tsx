import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 47,
    paddingLeft: 21,
    backgroundColor: '#0a071e',
    height: '100%',
    paddingRight: 21,
  },
});
