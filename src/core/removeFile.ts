/*
 * @Author: saber2pr
 * @Date: 2020-02-03 14:53:16
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-02-03 15:03:09
 */
import { request } from "./request"
import { KEYS } from "./KEYS"

type Commit = {
  message: string
  sha: string
}

export const removeFile = (repo: string, path: string, commit: Commit) => {
  const username = localStorage.getItem(KEYS.username)
  return request(
    `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
    { method: "DELETE", body: JSON.stringify(commit) }
  )
}
