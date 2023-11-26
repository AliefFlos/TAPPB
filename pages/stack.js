import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen ";
import ProfileScreen from "./ProfileScreen"; // Mengimpor ProfileScreen sebagai komponen, bukan sebagai default export

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen"  component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default ProfileStack;