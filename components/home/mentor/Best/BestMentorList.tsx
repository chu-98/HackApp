import React from "react";
import styled from "styled-components/native";
import BestMentor from "./BestMentor";

const Mentors = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  margin-left: 16px;
`;
const Pic = styled.Image`
  width: 80px;
  height: 80px;
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
const Like = styled.View`
  flex-direction: row;
  align-self: center;
`;
const Ic = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;
const Count = styled.Text``;

// <Logo
//   source={{ uri: "http://localhost:3000/public/" + testData?.imgUrl }}
// />

interface BestMentorProps {
  name: string;
  img: string;
  like: number;
  special: string[];
}

const BestMentorList: React.FC<BestMentorProps> = ({
  name,
  img,
  like,
  special,
}) => {
  return (
    <Container>
      <Mentors>
        <Pic source={{ uri: "http://localhost:3000/public/" + img }} />
        <Name>{name}</Name>
        {/* {special.map(item => (
          <Tag>{item}</Tag>
        ))} */}
        <Like>
          <Ic
            source={require("/Users/chugyohyeon/Documents/HackApp/assets/ic/ic-heart-click.png")}
          />
          <Count>{like}</Count>
        </Like>
      </Mentors>
    </Container>
  );
};

export default BestMentorList;
