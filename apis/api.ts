import { QueryFunction } from "react-query";

const BASE_URL = "http://localhost:3000";

export interface Best {
  email: string;
  name: string;
  imgUrl: string;
  likeCount: number;
  specialties: string[];
}

export interface BestResponse {
  data: Best[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const bestAPI: Fetchers<BestResponse> = {
  best: () => fetch(`${BASE_URL}/user/best?univid=0`).then(res => res.json()),
};

export interface Recommend {
  email: string;
  major: string;
  name: string;
  imgUrl: string;
  likeCount: number;
  specialties: string[];
  career: string[];
  message: string;
}

export interface RecommendResponse {
  results: Recommend[];
}

export const recommendAPI: Fetchers<RecommendResponse> = {
  recommend: () => fetch(`${BASE_URL}/user/recommend`).then(res => res.json()),
};
