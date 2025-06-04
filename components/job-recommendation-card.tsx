"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, DollarSign, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Job } from "@/types/job"

interface JobRecommendationCardProps {
  job: Job
  index: number
  onViewDetails: (jobId: string) => void
}

export function JobRecommendationCard({ job, index, onViewDetails }: JobRecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", job.color)}>
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">{job.title}</CardTitle>
                <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700">
                  {job.category}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{job.matchRate}%</div>
              <div className="text-sm text-gray-500">매칭률</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{job.description}</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">{job.salary}</div>
                <div className="text-xs text-gray-500">예상 연봉</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">{job.growth}</div>
                <div className="text-xs text-gray-500">성장률</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <div>
                <div className="text-sm font-medium text-gray-900">{job.timeToJob}</div>
                <div className="text-xs text-gray-500">준비기간</div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => onViewDetails(job.id)}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300"
          >
            상세 정보 보기
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
