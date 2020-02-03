import { request } from "./request"
import { KEYS } from "./KEYS"

export const getCommit = <T>(repo: string, path: string) => {
  const username = localStorage.getItem(KEYS.username)
  return request<T[]>(`https://api.github.com/repos/${username}/${repo}/commits`, {
    param: {
      path
    }
  })
}
