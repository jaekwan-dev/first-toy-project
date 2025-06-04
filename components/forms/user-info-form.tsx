"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { UserCircle, Brain, Calendar, UserRound, UserX, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useUserStore } from "@/stores/user-store"

const formSchema = z.object({
  age: z.number().min(15, "15세 이상만 가능합니다").max(70, "70세 이하만 가능합니다"),
  gender: z.enum(["남성", "여성", "선택안함"] as const),
  mbti: z.enum([
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ] as const),
})

type FormData = z.infer<typeof formSchema>

const MBTI_OPTIONS: { value: string; label: string; description: string; color: string }[] = [
  { value: "INTJ", label: "INTJ", description: "건축가", color: "bg-purple-500" },
  { value: "INTP", label: "INTP", description: "논리술사", color: "bg-blue-500" },
  { value: "ENTJ", label: "ENTJ", description: "통솔자", color: "bg-red-500" },
  { value: "ENTP", label: "ENTP", description: "변론가", color: "bg-orange-500" },
  { value: "INFJ", label: "INFJ", description: "옹호자", color: "bg-green-500" },
  { value: "INFP", label: "INFP", description: "중재자", color: "bg-teal-500" },
  { value: "ENFJ", label: "ENFJ", description: "선도자", color: "bg-pink-500" },
  { value: "ENFP", label: "ENFP", description: "활동가", color: "bg-yellow-500" },
  { value: "ISTJ", label: "ISTJ", description: "관리자", color: "bg-gray-500" },
  { value: "ISFJ", label: "ISFJ", description: "수호자", color: "bg-indigo-500" },
  { value: "ESTJ", label: "ESTJ", description: "경영자", color: "bg-cyan-500" },
  { value: "ESFJ", label: "ESFJ", description: "외교관", color: "bg-emerald-500" },
  { value: "ISTP", label: "ISTP", description: "만능재주꾼", color: "bg-slate-500" },
  { value: "ISFP", label: "ISFP", description: "예술가", color: "bg-rose-500" },
  { value: "ESTP", label: "ESTP", description: "사업가", color: "bg-amber-500" },
  { value: "ESFP", label: "ESFP", description: "연예인", color: "bg-fuchsia-500" },
]

export function UserInfoForm() {
  const router = useRouter()
  const { setUserInfo } = useUserStore()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 25,
      gender: undefined,
      mbti: undefined,
    },
  })

  const watchAge = form.watch("age")

  const onSubmit = (data: FormData) => {
    if (!data.mbti || !data.gender) {
      alert("모든 정보를 입력해주세요")
      return
    }
    setUserInfo(data)
    console.log(data)
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="text-center space-y-4 bg-gradient-to-r from-purple-50 to-indigo-50 pb-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <CardTitle className="text-2xl font-bold text-gray-900">당신에게 맞는 직업을 찾아보세요</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  간단한 정보를 입력하시면 맞춤형 직업을 추천해드립니다
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* 나이 입력 */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-purple-600" />
                            </div>
                            <FormLabel className="text-lg font-semibold text-gray-900">나이</FormLabel>
                          </div>
                          <FormControl>
                            <div className="space-y-4">
                              <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                min={15}
                                max={70}
                                step={1}
                                className="w-full [&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600 [&_.bg-primary]:bg-purple-600"
                              />
                              <div className="text-center">
                                <span className="text-3xl font-bold text-purple-600">{watchAge}세</span>
                              </div>
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* 성별 선택 */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <UserCircle className="w-5 h-5 text-blue-600" />
                            </div>
                            <FormLabel className="text-lg font-semibold text-gray-900">성별</FormLabel>
                          </div>
                          <FormControl>
                            <div className="grid grid-cols-3 gap-3">
                              {(
                                [
                                  { value: "남성", icon: UserRound, color: "bg-blue-500" },
                                  { value: "여성", icon: UserRound, color: "bg-pink-500" },
                                  { value: "선택안함", icon: UserX, color: "bg-gray-500" },
                                ] as const
                              ).map(({ value, icon: Icon, color }) => (
                                <motion.div
                                  key={value}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => field.onChange(value)}
                                  className={cn(
                                    "relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                                    "hover:shadow-lg",
                                    field.value === value
                                      ? "border-purple-500 bg-purple-50 shadow-lg"
                                      : "border-gray-200 bg-white hover:border-purple-300",
                                  )}
                                >
                                  <div className="flex flex-col items-center space-y-2">
                                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", color)}>
                                      <Icon className="w-4 h-4 text-white" />
                                    </div>
                                    <span
                                      className={cn(
                                        "text-sm font-medium",
                                        field.value === value ? "text-purple-700" : "text-gray-600",
                                      )}
                                    >
                                      {value}
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* MBTI 선택 */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <FormField
                    control={form.control}
                    name="mbti"
                    render={({ field }) => (
                      <FormItem>
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <Brain className="w-5 h-5 text-green-600" />
                            </div>
                            <FormLabel className="text-lg font-semibold text-gray-900">MBTI 유형</FormLabel>
                          </div>
                          <FormControl>
                            <div className="grid grid-cols-4 gap-2">
                              {MBTI_OPTIONS.map((option, index) => (
                                <motion.div
                                  key={option.value}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.6 + index * 0.02 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => field.onChange(option.value)}
                                  className={cn(
                                    "relative p-3 rounded-xl border-2 cursor-pointer transition-all duration-300",
                                    "hover:shadow-md",
                                    field.value === option.value
                                      ? "border-purple-500 bg-purple-50 shadow-lg"
                                      : "border-gray-200 bg-white hover:border-purple-300",
                                  )}
                                >
                                  <div className="flex flex-col items-center space-y-1">
                                    <div
                                      className={cn(
                                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white",
                                        option.color,
                                      )}
                                    >
                                      {option.label.slice(0, 2)}
                                    </div>
                                    <span
                                      className={cn(
                                        "text-xs font-bold",
                                        field.value === option.value ? "text-purple-600" : "text-gray-700",
                                      )}
                                    >
                                      {option.label}
                                    </span>
                                    <span
                                      className={cn(
                                        "text-xs text-center leading-tight",
                                        field.value === option.value ? "text-purple-600" : "text-gray-500",
                                      )}
                                    >
                                      {option.description}
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    직업 추천 받기
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </motion.div>
    </div>
  )
}
