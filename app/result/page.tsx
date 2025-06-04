"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Briefcase, TrendingUp, Sparkles } from "lucide-react"
import { useUserStore } from "@/stores/user-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getJobRecommendations, JobRecommendation } from "@/lib/recommendation-engine"

export default function ResultPage() {
  const router = useRouter()
  const { userInfo, setUserInfo } = useUserStore()
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If no user info, create sample data for demo
    if (!userInfo) {
      const sampleUserInfo = {
        mbti: "ENFP",
        age: 25,
        gender: "남성",
        interests: ["디자인", "기술", "창의"],
        skills: ["React", "디자인", "기획"],
        experience: "신입",
        education: "대학교",
        preferences: {
          workStyle: "유연근무",
          industry: "IT",
          location: "서울",
        },
      }
      setUserInfo(sampleUserInfo)
      return
    }

    const fetchRecommendations = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const results = await getJobRecommendations(userInfo)
        setRecommendations(results)
      } catch (err) {
        setError("직업 추천을 불러오는 중 오류가 발생했습니다.")
        console.error("직업 추천 로딩 중 오류:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendations()
  }, [userInfo, setUserInfo])

  const handleBackToSearch = () => {
    setUserInfo(null)
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-center space-y-4">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
          <div className="space-y-2">
            <p className="text-xl font-semibold">맞춤형 직업을 찾고 있어요</p>
            <p className="text-white/80 text-sm">잠시만 기다려주세요...</p>
          </div>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-sm"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-xl font-semibold">오류가 발생했습니다</h2>
            <p className="text-white/80 text-sm">{error}</p>
          </div>
          <Button
            onClick={handleBackToSearch}
            size="lg"
            className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            다시 시도하기
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="max-w-sm mx-auto px-4 py-4 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackToSearch}
            className="text-white hover:bg-white/10 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold text-white">맞춤형 직업 추천</h1>
          <div className="w-10" />
        </motion.div>

        {/* User Info Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="pl-5">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-white/70 text-sm">당신의 성격 유형</p>
                  <p className="text-white text-2xl font-bold">{userInfo?.mbti || "ENFP"}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommendations */}
        <div className="space-y-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-white text-lg font-semibold mb-2">
              추천 직업 {recommendations.length > 0 ? `(${recommendations.length}개)` : ""}
            </h2>
          </motion.div>

          {recommendations.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-600">아직 추천된 직업이 없습니다.</p>
                  <p className="text-gray-500 text-sm mt-1">잠시 후 다시 시도해주세요.</p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            recommendations.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base leading-tight">{job.title}</h3>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>

                    <Separator />

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center text-gray-500">
                          <Briefcase className="w-3 h-3 mr-1" />
                          <span>연봉</span>
                        </div>
                        <p className="font-medium text-gray-900">{job.salary}</p>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center text-gray-500">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span>성장성</span>
                        </div>
                        <p className="font-medium text-gray-900">{job.growth}</p>
                      </div>
                    </div>

                    <Separator />


                    {job.requiredSkills && job.requiredSkills.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-xs font-medium text-gray-700">필요 스킬</p>
                        <div className="flex flex-wrap gap-1">
                          {job.requiredSkills.slice(0, 4).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs px-2 py-0.5">
                              {skill}
                            </Badge>
                          ))}
                          {job.requiredSkills.length > 4 && (
                            <Badge variant="outline" className="text-xs px-2 py-0.5">
                              +{job.requiredSkills.length - 4}개 더
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom spacing for safe area */}
        <div className="h-4" />
      </div>
    </div>
  )
}
