import React from "react";
import styled from "styled-components/native";
import BestMentor from "./BestMentor";

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
  flex-direction: row;
`;

const BestMentorList = ({}) => {
  return (
    <Container>
      <Header>
        <Modi>지금 가장 핫한</Modi>
        <Title>
          <Title1>베스트 </Title1>
          <Title2>멘토</Title2>
        </Title>
      </Header>
      <Mentors>
        <BestMentor />
        <BestMentor />
        <BestMentor />
      </Mentors>
    </Container>
  );
};

export default BestMentorList;
