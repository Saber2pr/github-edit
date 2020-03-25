/*
 * @Author: saber2pr
 * @Date: 2020-03-25 20:02:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-03-25 20:09:47
 */
import { request } from "./request"
import { KEYS } from "./KEYS"

export const getSha = async (repo: string, path: string) => {
  const username = localStorage.getItem(KEYS.username)
  const node = await request<{ sha: string }>(
    `https://api.github.com/repos/${username}/${repo}/contents/${path}`
  )
  if (Array.isArray(node)) {
    throw new Error(`path:${path} is a dir!`)
  } else {
    return node.sha
  }
}
