import { request } from "./request"
import { KEYS } from "./KEYS"

export const getCommit = (repo: string, path: string) => {
  const username = localStorage.getItem(KEYS.username)
  return request(`https://api.github.com/repos/${username}/${repo}/commits`, {
    param: {
      path
    }
  })
}
