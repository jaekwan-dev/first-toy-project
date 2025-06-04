import { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "1",
    title: "소프트웨어 개발자",
    category: "IT/개발",
    description: "프로그래밍 언어를 활용하여 소프트웨어를 설계하고 개발하는 직업입니다.",
    salary: "4,000만원 ~ 8,000만원",
    growth: "매우 높음",
    timeToJob: "6개월 ~ 1년",
    color: "bg-blue-500",
    requirements: {
      mbti: ["INTJ", "INTP", "ENTJ", "ENTP"],
      ageRange: [20, 40],
    },
    matchFactors: {
      mbti: 0.4,
      age: 0.3,
      gender: 0.3,
    },
  },
  {
    id: "2",
    title: "UX/UI 디자이너",
    category: "디자인",
    description: "사용자 경험과 인터페이스를 디자인하여 제품의 사용성을 높이는 직업입니다.",
    salary: "3,500만원 ~ 7,000만원",
    growth: "높음",
    timeToJob: "6개월 ~ 1년",
    color: "bg-purple-500",
    requirements: {
      mbti: ["ENFP", "INFJ", "INFP", "ENFJ"],
      ageRange: [20, 35],
    },
    matchFactors: {
      mbti: 0.4,
      age: 0.3,
      gender: 0.3,
    },
  },
  {
    id: "3",
    title: "데이터 사이언티스트",
    category: "데이터",
    description: "빅데이터를 분석하여 비즈니스 인사이트를 도출하는 직업입니다.",
    salary: "4,500만원 ~ 9,000만원",
    growth: "매우 높음",
    timeToJob: "1년 ~ 2년",
    color: "bg-green-500",
    requirements: {
      mbti: ["INTJ", "INTP", "ENTJ", "ENTP"],
      ageRange: [25, 45],
    },
    matchFactors: {
      mbti: 0.4,
      age: 0.3,
      gender: 0.3,
    },
  },
  {
    id: "4",
    title: "마케팅 매니저",
    category: "마케팅",
    description: "기업의 마케팅 전략을 수립하고 실행하는 직업입니다.",
    salary: "4,000만원 ~ 7,500만원",
    growth: "높음",
    timeToJob: "1년 ~ 2년",
    color: "bg-red-500",
    requirements: {
      mbti: ["ENFJ", "ENTJ", "ESFJ", "ESTJ"],
      ageRange: [25, 40],
    },
    matchFactors: {
      mbti: 0.4,
      age: 0.3,
      gender: 0.3,
    },
  },
  {
    id: "5",
    title: "프로젝트 매니저",
    category: "관리",
    description: "프로젝트의 기획부터 완료까지 전 과정을 관리하는 직업입니다.",
    salary: "4,500만원 ~ 8,000만원",
    growth: "높음",
    timeToJob: "1년 ~ 2년",
    color: "bg-yellow-500",
    requirements: {
      mbti: ["ENTJ", "ESTJ", "ENFJ", "ESFJ"],
      ageRange: [28, 45],
    },
    matchFactors: {
      mbti: 0.4,
      age: 0.3,
      gender: 0.3,
    },
  },
]; 