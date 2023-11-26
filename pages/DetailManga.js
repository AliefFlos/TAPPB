import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import axios from "axios";
import Header from "../components/Header";

function DetailManga({ route }) {
  const { item } = route.params; // Menerima data item dari navigasi

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "600" }}>
            {item.nama}
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>{item.nim}</Text>
        </View>
         <Text style={styles.description}>
        Nama Gojo Satoru ternyata memiliki makna yang sangat dalam. Dalam bahasa Jepang, Satoru memiliki arti ‘mengerti’ atau ‘tahu. Sedangkan, jika ditulis dalam huruf kanji yang berbeda, nama tersebut akan berarti ‘terbangun secara spiritual’ atau ‘mencapai persepsi yang lebih tinggi’. Selain itu, nama tersebut juga dapat berarti filsafat, kebijaksanaan, dan pencerahan. Sementara, nama Gojo diambil dari nama keluarganya. Berikut profil dari Gojo Satoru.
        Nama: Gojo Satoru

Julukan dalam film: Strongest Jujutsu Sorcerer

Tanggal lahir: 7 Desember 1989

Keluarga: Yuta Okkotsu (keluarga jauh), Michizane Sugawara (leluhur).

Tinggi badan: 190 cm

Debut Manga: Jujutsu Kaisen 0, Chapter 0-2

Debut Anime: Jujutsu Kaisen Episode 1

Pengisi suara: Yuichi Nakamura untuk bahasa Jepang dan Kaji Tang untuk bahasa Inggris.


Fakta menarik Gojo Satoru
Dalam serial Jujutsu Kaisen, Gojo Satoru digambarkan sebagai salah satu sorcerer terkuat yang ada di bumi. Dia memiliki kemampuan yang sangat baik dalam refleks, kekuatan, serta mempunyai kecepatan yang tinggi. Beriku fakta menarik dari Gojo Satoru.

1. Muncul dalam Tokyo Metropolitan Curse Technical School Akutami

Gojo Satoru pertama kali muncul ke publik dalam serial pendek Tokyo Metropolitan Curse Technical School Akutami sebagai seorang mentor dari Jujutsu High. Dia ditugaskan untuk melatih Yuta Okkotsu yang dikenal sebagai remaja terkutuk. Serial pendek ini merupakan prekual Jujutsu Kaisen 0 dari serial utama Jujutsu Kaisen.

2. Selalu Menutup Kedua Matanya
aaxasD
DetailScreenQsda
dqaDS DetailScreenQsdad
DetailScreenQsdaSQWd
dqwadqw
sfgvabjknkm,
gdsfxagvknmalmjashskbjnmzq lASHBZQUAhsn zqwakjsn uzqwkjaMSNXZIUQKAJNS IUQWJKASHNXIWUASKJHDNXIWASKHZNXIASKZHxN
RQWTSAVHBZJn
      </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
});

export default DetailManga;