import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 164px;
  height: 237px;
  margin-left: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #56b3ff;
`;
const Majors = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: center;
`;
const Ic = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
const Major = styled.Text`
  font-size: 12px;
  line-height: 16.8px;
  letter-spacing: 0.06px;
  text-align: center;
  color: #252c39;
`;
const Pic = styled.Image`
  width: 60px;
  height: 60px;
  align-self: center;
`;
const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.88px;
  text-align: center;
  color: #000000;
`;
const Tags = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 6px;
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

const MajorMentor = ({}) => {
  return (
    <Container>
      <Majors>
        <Ic
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/icon/ic-star.png")}
        />
        <Major>시각디자인과</Major>
      </Majors>
      <Text
        style={{
          width: 149,
          height: 0.5,
          backgroundColor: "#c2cadb",
          alignSelf: "center",
          marginBottom: 12,
          marginTop: 3.5,
        }}
      />
      <Pic
        source={require("/Users/chugyohyeon/Documents/HackApp/assets/img/img-profile06.png")}
      />
      <Name>윤승아</Name>
      <Tags>
        <Tag>디자인</Tag>
        <Tag>대학생활</Tag>
        <Tag>+1</Tag>
      </Tags>
    </Container>
  );
};

export default MajorMentor;
