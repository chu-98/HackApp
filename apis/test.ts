import { QueryFunction } from "react-query";

const BASE_URL = "http://localhost:3000";

export interface Test {
  _id: string;
  interests: string[];
  specialties: string[];
  career: string[];
  imgUrl: string;
  major: string;
  grade: number;
  univName: string;
  univid: number;
  name: string;
  email: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}

export interface TestResponse {
  results: Test[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const testAPI: Fetchers<TestResponse> = {
  test: () => fetch(`${BASE_URL}/user/myprofile`).then(res => res.json()),
};
