import { QueryFunction } from "react-query";

const BASE_URL = "http://localhost:3000";

export interface Best {
  _id: string;
  message: string;
  review: string[];
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

export interface BestResponse {
  results: Best[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const bestAPI: Fetchers<BestResponse> = {
  test: () => fetch(`${BASE_URL}/user/myprofile`).then(res => res.json()),
};
