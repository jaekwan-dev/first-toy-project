export type Gender = "남성" | "여성" | "선택안함";

export type MBTI = 
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export interface UserInfo {
  age: number;
  gender: Gender;
  mbti: MBTI;
}

export interface FormData extends UserInfo {} 