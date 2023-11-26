import React from "react";
import { View, ScrollView, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { data } from "../data/data";
import Card from "../components/Card";
import Header from "../components/Header";

function ProfileScreen({ navigation }) {
  const handleCardPress = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  return (
    <View style={styles.container}>
      <Header headerText={"Top Character"} flexPosition={"center"} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <Card dataNama={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={{ top: 0, maxHeight: "83%" }} // Menambahkan styling untuk ProfileScreen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
});

export default ProfileScreen;