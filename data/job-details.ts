export const JOB_DETAILS: Record<string, {
  description: string;
  requiredSkills: string[];
  personalityTraits: string[];
  salary: string;
  growth: string;
}> = {
  "시스템 아키텍트": {
    description: "복잡한 시스템을 설계하고 구현하는 전문가",
    requiredSkills: ["시스템 설계", "클라우드 아키텍처", "보안", "프로젝트 관리"],
    personalityTraits: ["전략적 사고", "분석력", "독립성", "혁신성"],
    salary: "연 8,000만원 ~ 1억 5,000만원",
    growth: "매우 높음"
  },
  "데이터 사이언티스트": {
    description: "데이터를 분석하고 인사이트를 도출하는 전문가",
    requiredSkills: ["통계학", "머신러닝", "Python", "데이터 분석"],
    personalityTraits: ["분석력", "논리적 사고", "창의성", "문제해결력"],
    salary: "연 7,000만원 ~ 1억 3,000만원",
    growth: "매우 높음"
  },
  "소프트웨어 개발자": {
    description: "소프트웨어를 설계하고 개발하는 전문가",
    requiredSkills: ["프로그래밍", "알고리즘", "데이터베이스", "문제해결"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "매우 높음"
  },
  "AI 엔지니어": {
    description: "인공지능 시스템을 개발하고 구현하는 전문가",
    requiredSkills: ["머신러닝", "딥러닝", "Python", "수학"],
    personalityTraits: ["분석력", "논리적 사고", "창의성", "혁신성"],
    salary: "연 7,000만원 ~ 1억 4,000만원",
    growth: "매우 높음"
  },
  "프로젝트 매니저": {
    description: "프로젝트를 기획하고 관리하는 전문가",
    requiredSkills: ["프로젝트 관리", "의사소통", "리더십", "문제해결"],
    personalityTraits: ["체계성", "실용성", "리더십", "책임감"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "높음"
  },
  "마케팅 전문가": {
    description: "마케팅 전략을 수립하고 실행하는 전문가",
    requiredSkills: ["마케팅 전략", "데이터 분석", "커뮤니케이션", "창의성"],
    personalityTraits: ["창의성", "적응력", "혁신성", "문제해결력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "상담사": {
    description: "심리 상담을 제공하는 전문가",
    requiredSkills: ["심리학", "상담 기술", "공감능력", "문제해결"],
    personalityTraits: ["통찰력", "공감능력", "창의성", "헌신성"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "교사": {
    description: "학생들을 가르치고 지도하는 전문가",
    requiredSkills: ["교육학", "커뮤니케이션", "인내심", "창의성"],
    personalityTraits: ["헌신성", "실용성", "관심", "책임감"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "디자이너": {
    description: "시각적 디자인을 창작하는 전문가",
    requiredSkills: ["디자인 툴", "창의성", "커뮤니케이션", "트렌드 분석"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  },
  "엔지니어": {
    description: "기술적 문제를 해결하는 전문가",
    requiredSkills: ["문제해결", "기술적 지식", "분석력", "창의성"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "의사": {
    description: "환자를 진단하고 치료하는 의료 전문가",
    requiredSkills: ["의학 지식", "진단 능력", "의사소통", "책임감"],
    personalityTraits: ["체계성", "신뢰성", "실용성", "책임감"],
    salary: "연 1억원 ~ 3억원",
    growth: "매우 높음"
  },
  "변호사": {
    description: "법률 문제를 해결하고 조언하는 전문가",
    requiredSkills: ["법률 지식", "분석력", "설득력", "문제해결"],
    personalityTraits: ["체계성", "실용성", "리더십", "책임감"],
    salary: "연 8,000만원 ~ 2억원",
    growth: "높음"
  },
  "기업가": {
    description: "새로운 비즈니스를 창업하고 운영하는 전문가",
    requiredSkills: ["비즈니스 전략", "리더십", "혁신성", "위험 감수"],
    personalityTraits: ["리더십", "결단력", "전략적 사고", "목표지향성"],
    salary: "변동성 높음",
    growth: "매우 높음"
  },
  "예술가": {
    description: "창작 활동을 통해 예술 작품을 만드는 전문가",
    requiredSkills: ["창의성", "기술력", "표현력", "감수성"],
    personalityTraits: ["창의성", "이상주의", "공감능력", "헌신성"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "파일럿": {
    description: "항공기를 조종하는 전문가",
    requiredSkills: ["항공 지식", "집중력", "판단력", "책임감"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "연 1억원 ~ 2억원",
    growth: "높음"
  },
  "연구원": {
    description: "과학적 연구를 수행하는 전문가",
    requiredSkills: ["연구 방법론", "분석력", "창의성", "논문 작성"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "전략 컨설턴트": {
    description: "기업의 전략 수립을 지원하는 전문가",
    requiredSkills: ["전략 분석", "문제해결", "커뮤니케이션", "프로젝트 관리"],
    personalityTraits: ["전략적 사고", "분석력", "독립성", "혁신성"],
    salary: "연 7,000만원 ~ 1억 5,000만원",
    growth: "매우 높음"
  },
  "금융 분석가": {
    description: "금융 데이터를 분석하고 투자 전략을 제시하는 전문가",
    requiredSkills: ["금융 지식", "데이터 분석", "위험 관리", "의사결정"],
    personalityTraits: ["분석력", "논리적 사고", "독립성", "혁신성"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "높음"
  },
  "법률가": {
    description: "법률 문제를 해결하고 조언하는 전문가",
    requiredSkills: ["법률 지식", "분석력", "설득력", "문제해결"],
    personalityTraits: ["체계성", "실용성", "리더십", "책임감"],
    salary: "연 8,000만원 ~ 2억원",
    growth: "높음"
  },
  "수학자": {
    description: "수학적 이론을 연구하고 발전시키는 전문가",
    requiredSkills: ["수학적 사고", "논리력", "분석력", "연구 능력"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "철학자": {
    description: "철학적 문제를 연구하고 토론하는 전문가",
    requiredSkills: ["비판적 사고", "논리력", "작문 능력", "연구 능력"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "과학자": {
    description: "과학적 연구를 수행하는 전문가",
    requiredSkills: ["연구 방법론", "분석력", "창의성", "논문 작성"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "교수": {
    description: "대학에서 교육과 연구를 수행하는 전문가",
    requiredSkills: ["전문 지식", "교육 능력", "연구 능력", "커뮤니케이션"],
    personalityTraits: ["논리적 사고", "창의성", "문제해결력", "분석력"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "높음"
  },
  "비즈니스 컨설턴트": {
    description: "기업의 경영 문제를 해결하는 전문가",
    requiredSkills: ["비즈니스 분석", "전략 수립", "커뮤니케이션", "문제해결"],
    personalityTraits: ["리더십", "결단력", "전략적 사고", "목표지향성"],
    salary: "연 7,000만원 ~ 1억 5,000만원",
    growth: "매우 높음"
  },
  "경영진": {
    description: "기업의 전략적 의사결정을 담당하는 전문가",
    requiredSkills: ["리더십", "전략적 사고", "의사결정", "경영 지식"],
    personalityTraits: ["리더십", "결단력", "전략적 사고", "목표지향성"],
    salary: "연 1억원 ~ 3억원",
    growth: "매우 높음"
  },
  "정책 분석가": {
    description: "정책을 분석하고 제안하는 전문가",
    requiredSkills: ["정책 분석", "연구 능력", "커뮤니케이션", "문제해결"],
    personalityTraits: ["창의성", "적응력", "혁신성", "문제해결력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "금융 전문가": {
    description: "금융 관련 자문과 분석을 제공하는 전문가",
    requiredSkills: ["금융 지식", "분석력", "위험 관리", "의사결정"],
    personalityTraits: ["체계성", "실용성", "리더십", "책임감"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "높음"
  },
  "저널리스트": {
    description: "뉴스와 정보를 수집하고 전달하는 전문가",
    requiredSkills: ["취재 능력", "작문 능력", "분석력", "커뮤니케이션"],
    personalityTraits: ["창의성", "적응력", "혁신성", "문제해결력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "인사담당자": {
    description: "인재 채용과 관리를 담당하는 전문가",
    requiredSkills: ["인사 관리", "커뮤니케이션", "평가 능력", "문제해결"],
    personalityTraits: ["통찰력", "공감능력", "창의성", "헌신성"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "심리학자": {
    description: "심리학 연구와 상담을 수행하는 전문가",
    requiredSkills: ["심리학 지식", "연구 능력", "상담 기술", "분석력"],
    personalityTraits: ["통찰력", "공감능력", "창의성", "헌신성"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "사회복지사": {
    description: "사회적 문제 해결을 지원하는 전문가",
    requiredSkills: ["상담 기술", "문제해결", "공감능력", "커뮤니케이션"],
    personalityTraits: ["통찰력", "공감능력", "창의성", "헌신성"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "번역가": {
    description: "다국어 번역을 수행하는 전문가",
    requiredSkills: ["언어 능력", "문화 이해", "작문 능력", "전문 지식"],
    personalityTraits: ["창의성", "이상주의", "공감능력", "헌신성"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "HR 매니저": {
    description: "인사 관리와 조직 문화를 담당하는 전문가",
    requiredSkills: ["인사 관리", "리더십", "커뮤니케이션", "문제해결"],
    personalityTraits: ["리더십", "공감능력", "설득력", "헌신성"],
    salary: "연 6,000만원 ~ 1억 2,000만원",
    growth: "높음"
  },
  "정치인": {
    description: "정책 수립과 정치 활동을 수행하는 전문가",
    requiredSkills: ["정책 이해", "커뮤니케이션", "리더십", "문제해결"],
    personalityTraits: ["리더십", "공감능력", "설득력", "헌신성"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "비영리단체 대표": {
    description: "비영리 단체를 운영하는 전문가",
    requiredSkills: ["리더십", "프로젝트 관리", "커뮤니케이션", "문제해결"],
    personalityTraits: ["리더십", "공감능력", "설득력", "헌신성"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "이벤트 플래너": {
    description: "이벤트를 기획하고 실행하는 전문가",
    requiredSkills: ["기획력", "커뮤니케이션", "예산 관리", "문제해결"],
    personalityTraits: ["창의성", "열정", "적응력", "사교성"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  },
  "코치": {
    description: "개인이나 팀의 성장을 지원하는 전문가",
    requiredSkills: ["코칭 기술", "커뮤니케이션", "문제해결", "리더십"],
    personalityTraits: ["리더십", "공감능력", "설득력", "헌신성"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  },
  "엔터테이너": {
    description: "공연과 엔터테인먼트를 제공하는 전문가",
    requiredSkills: ["공연 능력", "창의성", "커뮤니케이션", "무대 매력"],
    personalityTraits: ["창의성", "열정", "적응력", "사교성"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "회계사": {
    description: "재무 회계와 세무를 담당하는 전문가",
    requiredSkills: ["회계 지식", "분석력", "세무 지식", "문제해결"],
    personalityTraits: ["체계성", "신뢰성", "실용성", "책임감"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "시스템 관리자": {
    description: "IT 시스템을 관리하고 운영하는 전문가",
    requiredSkills: ["시스템 관리", "보안", "문제해결", "기술 지식"],
    personalityTraits: ["체계성", "신뢰성", "실용성", "책임감"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "군인": {
    description: "국가 안보를 담당하는 전문가",
    requiredSkills: ["리더십", "체력", "팀워크", "문제해결"],
    personalityTraits: ["체계성", "신뢰성", "실용성", "책임감"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "경찰": {
    description: "치안과 법 집행을 담당하는 전문가",
    requiredSkills: ["법률 지식", "체력", "판단력", "문제해결"],
    personalityTraits: ["체계성", "신뢰성", "실용성", "책임감"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "행정직": {
    description: "행정 업무를 수행하는 전문가",
    requiredSkills: ["행정 지식", "커뮤니케이션", "문제해결", "조직 관리"],
    personalityTraits: ["헌신성", "실용성", "관심", "책임감"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "사서": {
    description: "도서관 자료를 관리하는 전문가",
    requiredSkills: ["자료 관리", "정보 검색", "커뮤니케이션", "조직 능력"],
    personalityTraits: ["헌신성", "실용성", "관심", "책임감"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "영양사": {
    description: "영양 관리와 식단 계획을 제공하는 전문가",
    requiredSkills: ["영양학 지식", "상담 기술", "식단 계획", "커뮤니케이션"],
    personalityTraits: ["헌신성", "실용성", "관심", "책임감"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "비서": {
    description: "경영진을 지원하는 전문가",
    requiredSkills: ["업무 관리", "커뮤니케이션", "조직 능력", "문제해결"],
    personalityTraits: ["사교성", "헌신성", "협력성", "실용성"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "기술자": {
    description: "기술적 문제를 해결하는 전문가",
    requiredSkills: ["기술 지식", "문제해결", "수리 능력", "안전 관리"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "보통"
  },
  "법의학자": {
    description: "법의학적 분석을 수행하는 전문가",
    requiredSkills: ["법의학 지식", "분석력", "연구 능력", "문제해결"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "운동선수": {
    description: "스포츠 경기를 수행하는 전문가",
    requiredSkills: ["체력", "기술력", "팀워크", "경쟁력"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "건축가": {
    description: "건축물을 설계하는 전문가",
    requiredSkills: ["설계 능력", "창의성", "기술 지식", "프로젝트 관리"],
    personalityTraits: ["문제해결력", "적응력", "실용성", "관찰력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "물리치료사": {
    description: "신체 재활을 지원하는 전문가",
    requiredSkills: ["물리치료 지식", "진단 능력", "치료 기술", "커뮤니케이션"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  },
  "요리사": {
    description: "음식을 조리하는 전문가",
    requiredSkills: ["조리 기술", "창의성", "위생 관리", "시간 관리"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "수의사": {
    description: "동물을 진단하고 치료하는 전문가",
    requiredSkills: ["수의학 지식", "진단 능력", "치료 기술", "커뮤니케이션"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  },
  "사진작가": {
    description: "사진을 촬영하는 전문가",
    requiredSkills: ["촬영 기술", "창의성", "장비 관리", "편집 능력"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "음악가": {
    description: "음악을 연주하고 창작하는 전문가",
    requiredSkills: ["연주 기술", "창의성", "음악 이론", "공연 능력"],
    personalityTraits: ["창의성", "실용성", "관심", "적응력"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "영업 전문가": {
    description: "제품과 서비스를 판매하는 전문가",
    requiredSkills: ["영업 기술", "커뮤니케이션", "관계 구축", "문제해결"],
    personalityTraits: ["적응력", "실용성", "에너지", "문제해결력"],
    salary: "연 5,000만원 ~ 1억원",
    growth: "높음"
  },
  "스포츠 선수": {
    description: "스포츠 경기를 수행하는 전문가",
    requiredSkills: ["체력", "기술력", "팀워크", "경쟁력"],
    personalityTraits: ["적응력", "실용성", "에너지", "문제해결력"],
    salary: "변동성 높음",
    growth: "보통"
  },
  "여행가이드": {
    description: "여행객을 안내하는 전문가",
    requiredSkills: ["언어 능력", "문화 지식", "커뮤니케이션", "문제해결"],
    personalityTraits: ["사교성", "열정", "창의성", "적응력"],
    salary: "연 3,500만원 ~ 7,000만원",
    growth: "보통"
  },
  "스타일리스트": {
    description: "패션과 스타일을 조언하는 전문가",
    requiredSkills: ["패션 지식", "창의성", "커뮤니케이션", "트렌드 분석"],
    personalityTraits: ["사교성", "열정", "창의성", "적응력"],
    salary: "연 4,000만원 ~ 8,000만원",
    growth: "높음"
  }
}; 