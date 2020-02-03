/*
 * @Author: saber2pr
 * @Date: 2020-02-03 14:10:56
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-02-03 15:02:25
 */
import { request } from "./request"
import { KEYS } from "./KEYS"

type Commit = {
  message: string
  content: string
  sha?: string
}

export const createFile = async (
  repo: string,
  path: string,
  commit: Commit
) => {
  const username = localStorage.getItem(KEYS.username)
  return await request(
    `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
    { method: "PUT", body: JSON.stringify(commit) }
  )
}
