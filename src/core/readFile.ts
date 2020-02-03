/*
 * @Author: saber2pr
 * @Date: 2020-02-03 14:51:29
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-02-03 15:03:00
 */
import { request } from "./request"
import { KEYS } from "./KEYS"

export const readFile = async (repo: string, path: string) => {
  const username = localStorage.getItem(KEYS.username)
  const { content } = await request<{ content: string }>(
    `https://api.github.com/repos/${username}/${repo}/contents/${path}`
  )
  return atob(content)
}
