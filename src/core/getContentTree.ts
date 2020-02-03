/*
 * @Author: saber2pr
 * @Date: 2020-02-03 13:24:41
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-02-03 15:02:41
 */
import { request } from "./request"
import { KEYS } from "./KEYS";

type Node = {
  type: "dir" | "file"
  path: string
  children?: Node[]
  sha?: string
}

export const getContentTree = async (
  repo: string,
  root: Node = { path: "", type: "dir" }
) => {
  if (root.type === "dir") {
    const username = localStorage.getItem(KEYS.username)
    const children = await request<Node[]>(
      `https://api.github.com/repos/${username}/${repo}/contents/${root.path}`
    )
    root.children = await Promise.all(
      children.map(({ path, type, sha }) =>
        getContentTree(repo, { path, type, sha })
      )
    )
  }
  return root
}
