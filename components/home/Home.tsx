import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { testAPI, TestResponse } from "../../apis/test";
import BestMentorList from "./mentor/Best/BestMentorList";
import MajorMentorList from "./mentor/Major/MajorMentorList";
import CustomMentor from "./mentor/Custom/CustomMentor";
import CustomMentorList from "./mentor/Custom/CustomMentorList";
import Keyword from "./Keyword";

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
  letter-spacing: 0.07px;
  color: #434a58;
  font-weight: 600;
  font-size: 14px;
`;

const Best = styled.ScrollView`
  margin-bottom: 48px;
`;
const Major = styled.ScrollView`
  margin-bottom: 48px;
`;
const Custom = styled.ScrollView`
  margin-bottom: 21px;
`;
const Index = styled.Text`
  align-self: center;
  text-align: center;
  width: 31px;
  height: 25px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #eef6ff;
  font-size: 12px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0.06px;
  color: #252c39;
`;
const ShopPage = styled.View`
  width: 343px;
  height: 64px;
  margin: 0px 16px 24px 26px;
  background-color: rgb(255, 245, 209);
  border-radius: 12px;
  flex-direction: row;
`;
const Desc = styled.View`
  margin: 10px 12px;
`;
const Question = styled.Text`
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: 0.07px;
  color: #252c39;
`;
const GoShop = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 22.4px;
  letter-spacing: 0.08px;
  color: #252c39;
`;
const KeywordSlide = styled.View``;

const imgUrl = [
  "a.png",
  "b.png",
  "c.png",
  "d.png",
  "e.png",
  "f.png",
  "g.png",
  "h.png",
];

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
          source={{ uri: "http://localhost:3000/public/" + testData?.imgUrl }}
        />
        <Uni>
          <Small>{testData?.name}</Small>
          <Big>{testData?.univName}</Big>
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
      <Custom>
        <CustomMentorList />
        <Index>1/4</Index>
      </Custom>
      <ShopPage>
        <Desc>
          <Question>멘토에게 진심으로 보은하고 싶다면?</Question>
          <TouchableOpacity>
            <GoShop>#보은샵으로!</GoShop>
          </TouchableOpacity>
        </Desc>
        <Image
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/icon/ic-star.png")}
          style={{
            width: 70,
            height: 70,
            marginLeft: 30,
            alignSelf: "flex-end",
          }}
        />
      </ShopPage>
      <KeywordSlide>
        <Keyword />
      </KeywordSlide>
    </Container>
  );
};

export default Home;
