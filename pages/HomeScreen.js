// Import React dan komponen-komponen dari React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definisikan komponen HomeScreen
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Selamat Datang di JapanApp</Text>
      <Text style={styles.description}>
        Aplikasi ini memberikan rekomendasi manga yang dapat kalian baca, anime yang dapat kalian tonton, dan karakter-karakter favorit.
        Aplikasi ini dibuat dengan React-Native.
        Aplikasi ini dibuat untuk mengerjakan tugas Akhir PPB.
        Alief Flostyo Zulfiqor Roshif.
        21120121130039.
      </Text>
    </View>
  );
};

// Gaya (styles) untuk komponen-komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

// Eksport komponen HomeScreen
export default HomeScreen;
