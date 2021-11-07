import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { testAPI, TestResponse } from "../../apis/test";

const Container = styled.ScrollView`
  background-color: white;
`;
const BestMentor = styled.FlatList``;
const MajorMentor = styled.FlatList``;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = () => {
  const { data: testData } = useQuery<TestResponse>(
    ["tests", "test"],
    testAPI.test
  );
  return (
    <Container>
      <BestMentor horizontal />
      <MajorMentor horizontal />
    </Container>
  );
};

export default Home;
