import { QueryFunction } from "react-query";

const BASE_URL = "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io";

export interface Test {
  id: number;
  name: string;
  desc: string;
  sights: string;
  data: string;
}

export interface TestResponse {
  results: Test[];
}

interface Fetchers<T> {
  [key: string]: QueryFunction<T>;
}

export const testAPI: Fetchers<TestResponse> = {
  test: () =>
    fetch(`http://localhost:3000/temp/push/hello`).then(res => res.json()),
};
