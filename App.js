import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/splash.png')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDD7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
  }
});
