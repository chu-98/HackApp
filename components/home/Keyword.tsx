import React from "react";
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
const Hashtag = styled.View`
  margin: 12px 16px 16px 16px;
`;
const HashTitle = styled.Text`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.06px;
  color: #010b19;
`;
const Tags = styled.View`
  flex-direction: row;
  border-radius: 12px;
  margin: 12px 0px;
`;
const Tag = styled.Text`
  margin-right: 8px;
  padding: 4px 16px;
  border-radius: 12px;
  background-color: #f7fafd;
  border-width: 0.5px;
  border-color: #c2cadb;
  font-size: 14px;
  line-height: 22.4px;
  letter-spacing: 0.08px;
  text-align: center;
  color: #555c68;
`;

const Keyword = ({}) => {
  return (
    <Container>
      <Header>
        <Modi>관심있는 분야별로 선택해요</Modi>
        <Title>
          <Title1>전문분야 </Title1>
          <Title2>키워드</Title2>
        </Title>
      </Header>
      <Hashtag>
        <HashTitle>#실무</HashTitle>
        <Tags>
          <Tag>영업</Tag>
          <Tag>마케팅</Tag>
          <Tag>기획</Tag>
          <Tag>연구</Tag>
        </Tags>
        <Tags>
          <Tag>디자인</Tag>
          <Tag>회계/금융</Tag>
          <Tag>생산/품질</Tag>
        </Tags>
        <Tags>
          <Tag>개발</Tag>
          <Tag>교육</Tag>
          <Tag>공무원</Tag>
        </Tags>
      </Hashtag>
      <Hashtag>
        <HashTitle>#학교</HashTitle>
        <Tags>
          <Tag>대학생활</Tag>
          <Tag>친목</Tag>
          <Tag>대외활동</Tag>
        </Tags>
        <Tags>
          <Tag>공모전</Tag>
          <Tag>자격증</Tag>
          <Tag>대학원</Tag>
        </Tags>
      </Hashtag>
    </Container>
  );
};

export default Keyword;
