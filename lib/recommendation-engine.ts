import { UserInfo } from "@/stores/user-store"
import { MBTI_JOB_MATCHES } from "@/data/mbti-job-matches"
import { JOB_DETAILS } from "@/data/job-details"

export interface JobRecommendation {
  title: string
  description: string
  requiredSkills: string[]
  personalityTraits: string[]
  salary: string
  growth: string
  reasoning: string
  matchScore: number
}

function getReasoning(mbti: string, traits: string[], skills: string[]): string {
  const matchingTraits = traits.filter(trait => skills.includes(trait))
  return `${mbti} 유형의 ${matchingTraits.join(", ")} 특성이 이 직업에 적합합니다.`
}

export async function getJobRecommendations(userInfo: UserInfo): Promise<JobRecommendation[]> {
  try {
    const mbtiJobs = MBTI_JOB_MATCHES[userInfo.mbti] || []
    const randomJobs = mbtiJobs.sort(() => Math.random() - 0.5).slice(0, 5)
    
    return randomJobs.map((jobTitle: string) => {
      const jobDetails = JOB_DETAILS[jobTitle]
      if (!jobDetails) {
        throw new Error(`Job details not found for: ${jobTitle}`)
      }

      return {
        title: jobTitle,
        ...jobDetails,
        reasoning: getReasoning(userInfo.mbti, jobDetails.personalityTraits, jobDetails.requiredSkills),
        matchScore: 90 // Assuming a default matchScore
      }
    })
  } catch (error) {
    console.error("Error getting job recommendations:", error)
    throw error
  }
} 