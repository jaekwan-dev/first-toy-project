// 디자인 시스템 - 참고 이미지 기반 색상 및 스타일 정의
export const designSystem = {
    colors: {
      // 기본 색상
      primary: {
        50: "#fff7ed",
        100: "#ffedd5",
        500: "#f97316", // 오렌지 포인트 컬러
        600: "#ea580c",
        700: "#c2410c",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        600: "#4b5563",
        700: "#374151",
        900: "#111827", // 메인 텍스트 색상
      },
      white: "#ffffff",
    },
  
    typography: {
      // 제목
      heading: {
        large: "text-3xl font-bold text-gray-900",
        medium: "text-xl font-semibold text-gray-900",
        small: "text-lg font-semibold text-gray-900",
      },
      // 본문
      body: {
        large: "text-lg text-gray-600",
        medium: "text-base text-gray-700",
        small: "text-sm text-gray-600",
      },
      // 강조
      emphasis: {
        primary: "text-orange-600 font-semibold",
        secondary: "text-gray-900 font-bold",
      },
    },
  
    components: {
      // 카드
      card: {
        base: "border-0 shadow-sm bg-white rounded-lg",
        hover: "hover:shadow-md transition-shadow duration-200",
      },
      // 버튼
      button: {
        primary: "bg-gray-900 hover:bg-gray-800 text-white",
        secondary: "bg-white border-2 border-gray-200 hover:border-orange-500 text-gray-900",
        accent: "bg-orange-500 hover:bg-orange-600 text-white",
      },
      // 입력 요소
      input: {
        base: "border-2 border-gray-200 focus:border-orange-500 bg-white",
        selected: "border-orange-500 bg-orange-50",
        hover: "hover:border-orange-500",
      },
    },
  
    animations: {
      // 미세한 애니메이션
      transition: "transition-all duration-200",
      hover: "hover:shadow-sm transform hover:-translate-y-0.5",
      focus: "focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50",
    },
  } as const
  
  export type DesignSystem = typeof designSystem
  