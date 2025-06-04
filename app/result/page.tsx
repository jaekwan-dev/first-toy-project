"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user-store";
import { getJobRecommendations } from "@/lib/recommendation-engine";
import { searchJobs, type JobSearchResult } from "@/lib/job-search";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Briefcase, TrendingUp, DollarSign, CheckCircle, ArrowLeft, Lightbulb, Building, MapPin, Calendar, ExternalLink, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobRecommendation {
  title: string;
  description: string;
  requiredSkills: string[];
  personalityTraits: string[];
  salary: string;
  growth: string;
  reasoning: string;
}

export default function ResultPage() {
  const router = useRouter();
  const { userInfo, setUserInfo } = useUserStore();
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>([]);
  const [jobListings, setJobListings] = useState<Record<string, JobSearchResult[]>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
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
        
        await Promise.all(
          results.map(job => searchJobListings(job.title))
        );
      } catch (err) {
        setError("직업 추천을 불러오는 중 오류가 발생했습니다.");
        console.error("직업 추천 로딩 중 오류:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [userInfo, router]);

  const searchJobListings = async (jobTitle: string) => {
    setLoading(prev => ({ ...prev, [jobTitle]: true }));
    try {
      const results = await searchJobs(jobTitle);
      setJobListings(prev => ({ ...prev, [jobTitle]: results }));
    } catch (error) {
      console.error("채용 정보 검색 중 오류 발생:", error);
      setJobListings(prev => ({ ...prev, [jobTitle]: [] }));
    } finally {
      setLoading(prev => ({ ...prev, [jobTitle]: false }));
    }
  };

  const handleBackToSearch = () => {
    setUserInfo(null);
    router.push("/");
  };

  if (!userInfo) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
          <p className="text-white font-semibold text-lg">맞춤형 직업을 찾는 중입니다...</p>
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
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 mb-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">
                맞춤형 직업 추천 결과
              </h1>
            </motion.div>
            <p className="text-white/80 mt-2">
              MBTI, 나이, 성별을 기반으로 한 맞춤형 직업 추천 결과입니다
            </p>
          </div>
          <Button
            onClick={handleBackToSearch}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            다시 검색하기
          </Button>
        </div>

        <div className="grid gap-8">
          {recommendations.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-2">
                        {job.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-purple-600" />
                          필요 역량
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {job.requiredSkills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Brain className="w-5 h-5 mr-2 text-purple-600" />
                          성향 특성
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {job.personalityTraits.map((trait, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <DollarSign className="w-5 h-5 mr-2 text-purple-600" />
                          예상 연봉
                        </h3>
                        <p className="text-gray-600">{job.salary}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                          성장 가능성
                        </h3>
                        <p className="text-gray-600">{job.growth}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
                      추천 이유
                    </h3>
                    <p className="text-gray-600">{job.reasoning}</p>
                  </div>

                  {/* 실시간 채용 정보 */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building className="w-6 h-6 mr-2 text-purple-600" />
                      실시간 채용 정보
                    </h3>
                    {loading[job.title] ? (
                      <div className="flex justify-center items-center py-8">
                        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
                      </div>
                    ) : jobListings[job.title]?.length > 0 ? (
                      <div className="grid gap-4">
                        {jobListings[job.title].map((listing, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 border border-purple-100 rounded-xl hover:shadow-md transition-shadow bg-white"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900">{listing.title}</h4>
                                <p className="text-gray-600 flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {listing.company} • {listing.location}
                                </p>
                              </div>
                              <span className="text-purple-600 font-medium">{listing.salary}</span>
                            </div>
                            <p className="mt-2 text-gray-600">{listing.description}</p>
                            <div className="mt-3">
                              <h5 className="text-sm font-medium text-gray-900 mb-1">요구사항</h5>
                              <ul className="list-disc list-inside text-gray-600">
                                {listing.requirements.map((req, j) => (
                                  <li key={j}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                              <span className="text-sm text-gray-500 flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                게시일: {listing.postedDate}
                              </span>
                              <a
                                href={listing.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
                              >
                                지원하기
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        현재 등록된 채용 정보가 없습니다.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 