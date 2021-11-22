import React from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BestMentorList from "./mentor/Best/BestMentorList";
import CustomMentorList from "./mentor/Custom/CustomMentorList";
import Keyword from "./Keyword";
import { useQuery, useQueryClient } from "react-query";
import {
  bestAPI,
  BestResponse,
  recommendAPI,
  RecommendResponse,
} from "../../apis/api";
import MajorMentorList from "./mentor/Major/MajorMentorList";

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
  align-self: center;
  margin: 21px 17px;
`;

const Uni = styled.View`
  margin: 12px 40px 12px 0px;
`;
const Small = styled.Text`
  line-height: 16.8px;
  letter-spacing: 0.06px;
  color: #7c8393;
  font-size: 12px;
`;
const Big = styled.Text`
  line-height: 28px;
  letter-spacing: 0.06px;
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
const Header2 = styled.View`
  margin-top: 48px;
  margin-left: 16px;
  margin-bottom: 12px;
`;
const Modi = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: 0.08px;
  text-align: left;
  color: #555c6b;
`;
const Title = styled.View`
  flex-direction: row;
`;
const Title1 = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: 0.05px;
  text-align: left;
  color: #1870f3;
`;
const Title2 = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: 0.05px;
  text-align: left;
  color: rgb(37, 44, 57);
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = () => {
  const queryClient = useQueryClient();
  const { data: bestData } = useQuery<BestResponse>(["Best"], bestAPI.best);
  const { data: recommendData } = useQuery<RecommendResponse>(
    ["Recommend"],
    recommendAPI.recommend
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
          style={{ width: 30, height: 22 }}
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/img/img-home-school-logo.png")}
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
      <Header2>
        <Modi>지금 가장 핫한</Modi>
        <Title>
          <Title1>베스트 </Title1>
          <Title2>멘토</Title2>
        </Title>
      </Header2>
      <FlatList
        keyExtractor={item => item.email}
        horizontal
        data={bestData?.data}
        renderItem={({ item }) => (
          <BestMentorList
            name={item.name}
            img={item.imgUrl}
            like={item.likeCount}
            special={item.specialties}
          />
        )}
      />
      <Header2>
        <Modi>나의 학과 선배님과 밥약을?!</Modi>
        <Title>
          <Title1>전공이 같은 </Title1>
          <Title2>멘토</Title2>
        </Title>
      </Header2>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.email}
        horizontal
        data={recommendData?.data}
        renderItem={({ item }) => (
          <MajorMentorList
            major={item.major}
            img={item.imgUrl}
            name={item.name}
            msg={item.message}
          />
        )}
      />
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
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/img/img-home-banner.png")}
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
