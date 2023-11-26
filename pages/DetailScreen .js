import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import axios from "axios";
import Header from "../components/Header";

function DetailScreen({ route }) {
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
          <Text style={{ fontSize: 16, color: "gray" }}>{item.description}</Text>
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
});

export default DetailScreen;