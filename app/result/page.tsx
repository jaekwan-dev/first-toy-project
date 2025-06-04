"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { useUserStore } from "@/stores/user-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getJobRecommendations } from "@/lib/recommendation-engine";

interface JobRecommendation {
  title: string;
  description: string;
  requiredSkills: string[];
  personalityTraits: string[];
  salary: string;
  growth: string;
  reasoning: string;
  matchScore: number;
}

export default function ResultPage() {
  const router = useRouter();
  const { userInfo, setUserInfo } = useUserStore();
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userInfo) {
      router.push("/");
      return;
    }

    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await getJobRecommendations(userInfo);
        setRecommendations(results);
      } catch (err) {
        setError("직업 추천을 불러오는 중 오류가 발생했습니다.");
        console.error("직업 추천 로딩 중 오류:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [userInfo, router]);

  const handleBackToSearch = () => {
    setUserInfo(null);
    router.push("/");
  };

  if (!userInfo) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-center"
        >
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg font-medium">맞춤형 직업을 찾고 있어요...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <p className="text-white mb-4">{error}</p>
          <Button
            onClick={handleBackToSearch}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            다시 시도하기
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="max-w-md mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-4"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackToSearch}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">맞춤형 직업 추천</h1>
          <div className="w-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">당신의 MBTI</p>
                  <p className="text-white text-xl font-bold">{userInfo?.mbti}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-3">
          {recommendations.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-3">
                  <div className="mb-2">
                    <h2 className="text-base font-bold text-gray-900 mb-1">{job.title}</h2>
                    <p className="text-xs text-gray-600 line-clamp-2">{job.description}</p>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1 text-xs flex-1">
                      <Briefcase className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700 truncate">{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs ml-2">
                      <TrendingUp className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{job.growth}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2">{job.reasoning}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 