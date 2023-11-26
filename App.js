import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import MoeScreen from "./pages/MoeScreen";
import ProfileStack from "./pages/stack";
import Manga from "./pages/stackManga";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 16,
            shadowOpacity: 0,
            elevation: 1,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Manga") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            }else if (route.name === "Moe") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            }
            return <Octicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Moe" component={MoeScreen} />
        <Tab.Screen name="Manga" component={Manga} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
