import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Header = styled.View`
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
const Mentors = styled.View`
  margin-left: 16px;
  flex-direction: row;
  width: 343px;
  height: 160px;
  border-radius: 12px;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #e2f2ff;
`;
const Img = styled.Image`
  width: 80px;
  height: 80px;
  margin-left: 12px;
  align-self: center;
`;
const Desc = styled.View`
  margin: 16px;
`;

const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Name = styled.Text``;
const Ic = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 12px;
  margin-right: 4px;
`;
const Major = styled.Text``;

const Tags = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Tag = styled.Text`
  margin-right: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  background-color: #fbfdff;
  border-style: solid;
  border-width: 0.5px;
  border-color: #c2cadb;
  font-size: 14px;
  line-height: 19.6px;
  letter-spacing: 0.07px;
  text-align: center;
  color: #252c39;
`;

const Career = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;
const Company = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
  letter-spacing: 0.07px;
  text-align: center;
  color: #252c39;
`;
const Position = styled.Text`
  font-size: 12px;
  font-weight: 300;
  line-height: 16.8px;
  letter-spacing: 0.06px;
  text-align: center;
  color: #252c39;
`;

const Talk = styled.Text`
  width: 223px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16.8px;
  letter-spacing: 0.06px;
  text-align: left;
  color: #252c39;
`;

const CustomMentorList = ({}) => {
  return (
    <Container>
      <Header>
        <Modi>비쁠 님에게 추천해요</Modi>
        <Title>
          <Title1>나와 어울리는 </Title1>
          <Title2>멘토</Title2>
        </Title>
      </Header>
      <Mentors
        style={{
          shadowColor: "rgba(186, 221, 255, 0.5)",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 12,
          shadowOpacity: 1,
        }}
      >
        <Img
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/profile/img-profile03.png")}
        />
        <Desc>
          <Info>
            <Name
              style={{
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 22.4,
                letterSpacing: 0.08,
                textAlign: "center",
                color: "#010b19",
              }}
            >
              한혜연
            </Name>
            <Ic
              source={require("/Users/chugyohyeon/Documents/HackApp/assets/emoji/emoji-graduation.png")}
            />
            <Major
              style={{
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16.8,
                letterSpacing: 0.06,
                textAlign: "center",
                color: "#252c39",
              }}
            >
              시각디자인과
            </Major>
          </Info>
          <Text
            style={{
              width: 223,
              height: 0.5,
              backgroundColor: "#c2cadb",
              marginBottom: 8,
              marginTop: 6.5,
            }}
          />
          <Tags>
            <Tag>디자인</Tag>
            <Tag>대학생활</Tag>
            <Tag>공모전</Tag>
          </Tags>
          <Career>
            <Company>제일기획 </Company>
            <Position>| UXUI팀 매니저</Position>
          </Career>
          <Talk>
            같은 커리어를 꿈꾸는 우리 후배들에게 많은 도움이 되어주고 싶어요!
          </Talk>
        </Desc>
      </Mentors>
    </Container>
  );
};

export default CustomMentorList;
