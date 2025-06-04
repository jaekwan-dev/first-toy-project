import { Job } from "@/types/job";
import { jobs } from "@/data/jobs";

interface UserInfo {
  age: number;
  gender: "남성" | "여성" | "선택안함";
  mbti: string;
}

export function recommendJobs(userInfo: UserInfo): Job[] {
  const scoredJobs = jobs.map(job => {
    const mbtiScore = calculateMbtiScore(userInfo.mbti, job.requirements.mbti);
    const ageScore = calculateAgeScore(userInfo.age, job.requirements.ageRange);
    const genderScore = calculateGenderScore(userInfo.gender, job.requirements.gender);

    const totalScore = 
      mbtiScore * job.matchFactors.mbti +
      ageScore * job.matchFactors.age +
      genderScore * job.matchFactors.gender;

    return {
      ...job,
      matchRate: Math.round(totalScore * 100),
    };
  });

  return scoredJobs
    .sort((a, b) => b.matchRate - a.matchRate)
    .slice(0, 5);
}

function calculateMbtiScore(userMbti: string, requiredMbti: string[]): number {
  return requiredMbti.includes(userMbti) ? 1 : 0.3;
}

function calculateAgeScore(userAge: number, [min, max]: [number, number]): number {
  if (userAge >= min && userAge <= max) return 1;
  if (userAge < min) return 0.5;
  if (userAge > max) return 0.7;
  return 0;
}

function calculateGenderScore(userGender: "남성" | "여성" | "선택안함", requiredGender?: "남성" | "여성" | "선택안함"): number {
  if (!requiredGender) return 1;
  if (userGender === "선택안함") return 0.8;
  return userGender === requiredGender ? 1 : 0.5;
} 