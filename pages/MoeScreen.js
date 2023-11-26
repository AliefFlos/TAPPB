import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, SafeAreaView } from "react-native";
import axios from "axios";
import Header from "../components/Header";

function MoeScreen() {
  const [topAnime, setTopAnime] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchTopAnime() {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        setTopAnime(response.data.data);
      } catch (error) {
        Alert.alert("Failed to fetch top anime", error.message);
      }
    }

    fetchTopAnime();
  }, []);

  const prevButtonHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextButtonHandler = () => {
    if (currentIndex < topAnime.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const anime = topAnime[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Header headerIcon="bell-o" headerText="Top Anime" flexPosition="flex-start" />
      <View style={styles.contentContainer}>
        {anime ? (
          <View style={styles.infoContainer}>
            <Image source={{ uri: anime.images.jpg.image_url }} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <Text style={styles.animeTitle}>{anime.title}</Text>
            <Text style={styles.animeRank}>Rank: {anime.rank}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.buttonContainer}>
          {currentIndex > 0 ? (
            <TouchableOpacity onPress={prevButtonHandler} style={styles.button}>
              <Text style={styles.buttonText}>Prev</Text>
            </TouchableOpacity>
          ) : null}
          {currentIndex < topAnime.length - 1 ? (
            <TouchableOpacity onPress={nextButtonHandler} style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          ) : null}
        </View>
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
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animeImage: {
    width: 150,
    height: 225,
    borderRadius: 8,
    marginBottom: 10,
  },
  animeTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  animeRank: {
    fontSize: 16,
    color: "gray",
  },
  animeSynopsis: {
    fontSize: 14,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 16,
  },
});

export default MoeScreen;
