import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { testAPI, TestResponse } from "../../apis/test";
import BestMentorList from "./mentor/BestMentorList";
import MajorMentorList from "./mentor/MajorMentorList";

const Container = styled.ScrollView`
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  background-color: #fbfdff;
  margin: 16px 16px 24px 16px;
  width: 343px;
  height: 64px;
  border-radius: 12px;
`;
const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin: 12px;
  border-radius: 8;
`;

const Uni = styled.View`
  margin: 12px 40px 12px 0px;
`;
const Small = styled.Text`
  line-height: 16.8px;
  letter-spacing: 0.06;
  color: #7c8393;
  font-size: 12px;
`;
const Big = styled.Text`
  line-height: 28px;
  letter-spacing: 0.06;
  color: #010b19;
  font-size: 20px;
`;

const Tail = styled.View`
  flex-direction: row;
  margin-top: 23px;
`;
const Part = styled.Text`
  line-height: 19.6px;
  letter-spacing: 0.07;
  color: #434a58;

  font-size: 14px;
  margin-right: 6px;
`;
const Count = styled.Text`
  line-height: 19.6px;
  letter-spacing: 0.07;
  color: #434a58;
  font-weight: 600;
  font-size: 14px;
`;

const Best = styled.ScrollView`
  margin-bottom: 48px;
`;
const Major = styled.ScrollView``;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = () => {
  const { data: testData } = useQuery<TestResponse>(
    ["tests", "test"],
    testAPI.test
  );
  return (
    <Container>
      <Header
        style={{
          shadowColor: "rgba(214, 222, 239, 0.5)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      >
        <Logo
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/img/img-profile02.png")}
        />
        <Uni>
          <Small>학교</Small>
          <Big>원티드대학교</Big>
        </Uni>
        <Tail>
          <Part>멘토링 참여회원</Part>
          <Count>653</Count>
        </Tail>
      </Header>
      <Best horizontal showsHorizontalScrollIndicator={false}>
        <BestMentorList />
      </Best>
      <Major horizontal showsHorizontalScrollIndicator={false}>
        <MajorMentorList />
      </Major>
    </Container>
  );
};

export default Home;
