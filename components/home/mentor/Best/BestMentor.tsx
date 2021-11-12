import React from "react";
import styled from "styled-components/native";

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

const BestMentor = ({}) => {
  return (
    <Container>
      <Pic
        source={require("/Users/chugyohyeon/Documents/HackApp/assets/profile/img-profile01.png")}
      />
      <Name>한혜연</Name>
      <Tags>
        <Tag>디자인</Tag>
        <Tag>대학생활</Tag>
        <Tag>+1</Tag>
      </Tags>
      <Like>
        <Ic
          source={require("/Users/chugyohyeon/Documents/HackApp/assets/ic/ic-heart-click.png")}
        />
        <Count>87</Count>
      </Like>
    </Container>
  );
};

export default BestMentor;
