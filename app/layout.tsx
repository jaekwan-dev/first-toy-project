import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAREER RECOMMEND - 맞춤형 직업 추천 서비스",
  description: "당신의 MBTI와 기본 정보를 바탕으로 최적의 직업을 추천해드립니다",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">{children}</div>
      </body>
    </html>
  )
}
