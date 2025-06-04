import { create } from "zustand"

export interface UserInfo {
  mbti: string
  age: number
  gender: string
}

interface UserState {
  userInfo: UserInfo | null
  setUserInfo: (info: UserInfo | null) => void
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (info) => set({ userInfo: info }),
}))
