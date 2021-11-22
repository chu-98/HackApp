import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Mentor from "../Best/BestMentor";
import MajorMentor from "./MajorMentor";

const Container = styled.View`
  width: 164px;
  height: 237px;
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
  border-color: #56b3ff;
  margin-left: 12px;
`;
const Majors = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: center;
`;
const Ic = styled.Image`
  width: 18px;
  height: 18px;
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
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.88px;
  text-align: center;
  color: #000000;
`;
const MsgBack = styled.View`
  flex: 1;
  margin-top: 12px;
  background-color: rgb(86, 179, 255);
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
  border-color: #56b3ff;
`;
const Msg = styled.Text`
  color: #ffffff;
  margin: 20px 12px 0px 12px;
  font-size: 13px;
  line-height: 16.8px;
  letter-spacing: 0.06px;
  text-align: center;
`;

interface MajorMentorProps {
  major: string;
  img: string;
  name: string;
  msg: string;
}

const MajorMentorList: React.FC<MajorMentorProps> = ({
  major,
  img,
  name,
  msg,
}) => {
  return (
    <Container>
      <Majors>
        <Ic
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/emoji/emoji-graduation.png")}
        />
        <Major>{major}</Major>
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
      <Pic source={{ uri: "http://localhost:3000/public/" + img }} />
      <Name>{name}</Name>
      <MsgBack>
        <Msg>{msg}</Msg>
      </MsgBack>
    </Container>
  );
};

export default MajorMentorList;
