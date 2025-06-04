export interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  salary: string;
  growth: string;
  timeToJob: string;
  color: string;
  matchRate?: number;
  requirements: {
    mbti: string[];
    ageRange: [number, number];
    gender?: "남성" | "여성" | "선택안함";
  };
  matchFactors: {
    mbti: number;
    age: number;
    gender: number;
  };
} 