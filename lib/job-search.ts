export interface JobSearchResult {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  url: string;
}

// 실제 서비스에서는 이 부분을 실제 채용 API로 교체해야 합니다
// 예: Saramin, JobKorea, LinkedIn 등의 API
export async function searchJobs(jobTitle: string): Promise<JobSearchResult[]> {
  // TODO: 실제 API 연동 시 이 부분을 수정
  // 현재는 목업 데이터를 반환
  await new Promise(resolve => setTimeout(resolve, 1000)); // API 호출 시뮬레이션

  const mockData: JobSearchResult[] = [
    {
      title: `${jobTitle} 신입/경력`,
      company: "테크 컴퍼니",
      location: "서울 강남구",
      salary: "회사 내규에 따름",
      description: "혁신적인 기술 환경에서 함께 성장할 인재를 모십니다.",
      requirements: [
        "관련 전공자 또는 자격증 보유자",
        "새로운 기술에 대한 열정",
        "팀워크 능력"
      ],
      postedDate: "2024-03-20",
      url: "https://example.com/job1"
    },
    {
      title: `시니어 ${jobTitle}`,
      company: "글로벌 IT 기업",
      location: "서울 서초구",
      salary: "1억 이상",
      description: "글로벌 시장을 선도하는 프로젝트에 참여하실 분을 모십니다.",
      requirements: [
        "5년 이상의 관련 경력",
        "영어 의사소통 가능",
        "리더십 경험"
      ],
      postedDate: "2024-03-19",
      url: "https://example.com/job2"
    },
    {
      title: `주니어 ${jobTitle}`,
      company: "스타트업",
      location: "서울 마포구",
      salary: "4,000만원 ~ 6,000만원",
      description: "빠르게 성장하는 스타트업에서 함께 성장할 인재를 찾습니다.",
      requirements: [
        "1-3년의 관련 경력",
        "문제 해결 능력",
        "적극적인 자세"
      ],
      postedDate: "2024-03-18",
      url: "https://example.com/job3"
    }
  ];

  return mockData;
} 