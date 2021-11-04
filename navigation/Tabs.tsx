import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Home from "../components/home/Home";
import Chat from "../components/chat/Chat";
import Shop from "../components/shop/Shop";
import MyPage from "../components/page/MyPage";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          color: "orange",
        },
        tabBarLabelStyle: {
          marginTop: -10,
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="shopping-cart" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color={"black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
