"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { UserCircle, Brain, Calendar, UserRound, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useUserStore } from "@/stores/user-store"
import { cn } from "@/lib/utils"

const mbtiTypes = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ"
]

const ageRanges = [
  { label: "20대", value: 25 },
  { label: "30대", value: 35 },
  { label: "40대", value: 45 }
]

export default function UserInfoForm() {
  const router = useRouter()
  const { setUserInfo } = useUserStore()
  const [mbti, setMbti] = useState<string>("")
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [selectedAge, setSelectedAge] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mbti || !selectedGender || selectedAge === null) {
      alert("모든 항목을 선택해주세요.")
      return
    }

    setUserInfo({
      mbti,
      gender: selectedGender,
      age: selectedAge,
    })

    router.push("/result")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center space-y-2 bg-gradient-to-r from-purple-50 to-indigo-50 pb-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-xl font-bold text-gray-900">당신에게 맞는 직업을 찾아보세요</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                간단한 정보를 입력하시면 맞춤형 직업을 추천해드립니다
              </CardDescription>
            </CardHeader>

            <CardContent className="p-1 space-y-2">
              {/* 나이 선택 */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <label className="text-base font-semibold text-gray-900">나이</label>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {ageRanges.map(({ label, value }) => (
                      <motion.div
                        key={value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedAge(value)}
                          className={cn(
                            "w-full p-2 rounded-lg border-2 transition-all duration-300",
                            "hover:shadow-md",
                            selectedAge === value
                              ? "border-purple-500 bg-purple-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-purple-300"
                          )}
                        >
                          <span className={cn(
                            "text-base font-semibold",
                            selectedAge === value ? "text-purple-600" : "text-gray-700"
                          )}>
                            {label}
                          </span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 성별 선택 */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <UserCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <label className="text-base font-semibold text-gray-900">성별</label>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: "남성", icon: UserRound, color: "bg-blue-500" },
                      { value: "여성", icon: UserRound, color: "bg-pink-500" },
                    ].map(({ value, icon: Icon, color }) => (
                      <motion.div
                        key={value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedGender(value)}
                          className={cn(
                            "w-full p-2 rounded-lg border-2 transition-all duration-300",
                            "hover:shadow-md",
                            selectedGender === value
                              ? "border-purple-500 bg-purple-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-purple-300"
                          )}
                        >
                          <div className="flex flex-col items-center">
                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", color)}>
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* MBTI 선택 */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-green-600" />
                    </div>
                    <label className="text-base font-semibold text-gray-900">MBTI 유형</label>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {mbtiTypes.map((type, index) => (
                      <motion.div
                        key={type}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.02 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          type="button"
                          onClick={() => setMbti(type)}
                          className={cn(
                            "w-full p-1.5 rounded-lg border-2 transition-all duration-300",
                            "hover:shadow-md",
                            mbti === type
                              ? "border-purple-500 bg-purple-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-purple-300"
                          )}
                        >
                          <span className={cn(
                            "text-xs font-bold",
                            mbti === type ? "text-purple-600" : "text-gray-700"
                          )}>
                            {type}
                          </span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  직업 추천 받기
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </form>
      </motion.div>
    </div>
  )
}
