import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailManga from "./DetailManga";
import ProfileManga from "./ProfileManga"; // Mengimpor ProfileScreen sebagai komponen, bukan sebagai default export


const StackManga = createNativeStackNavigator();

function Manga() {
  return (
    <StackManga.Navigator>
      <StackManga.Screen name="ProfileManga"  component={ProfileManga} options={{ headerShown: false }} />
      <StackManga.Screen name="DetailManga" component={DetailManga} options={{ headerShown: false }} />
    </StackManga.Navigator>
  );
}

export default Manga;