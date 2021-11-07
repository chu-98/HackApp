import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Home from "../components/home/Home";
import Chat from "../components/chat/Chat";
import Shop from "../components/shop/Shop";
import MyPage from "../components/page/MyPage";
import { Blue } from "../assets/colors/colors";

const Tab = createBottomTabNavigator();

const Icon = styled.Image``;

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#1870f3",
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "600",
          height: 34,
          lineHeight: 33.6,
          letterSpacing: 0.05,
        },
        tabBarLabelStyle: {
          width: 56,
          height: 17,
          fontSize: 12,
          fontWeight: "normal",
          lineHeight: 16.8,
          letterSpacing: 0.06,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon source={require("../assets/icon/ic-home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="멘토링 일정"
        component={Shop}
        options={{
          tabBarIcon: () => (
            <Icon source={require("../assets/icon/ic-calender.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={Chat}
        options={{
          tabBarIcon: () => (
            <Icon source={require("../assets/icon/ic-chat.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="나의 프로필"
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <Icon source={require("../assets/icon/ic-mypage.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
