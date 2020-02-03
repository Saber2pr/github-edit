/*
 * @Author: saber2pr
 * @Date: 2020-02-03 15:02:08
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2020-02-03 15:02:08
 */
import { KEYS } from "./KEYS"

export const login = (username: string, password: string) => {
  if (localStorage.getItem(KEYS.Authorization)) {
    return
  }
  const auth = `Basic ${btoa(`${username}:${password}`)}`
  localStorage.setItem(KEYS.Authorization, auth)
  localStorage.setItem(KEYS.username, username)
}

export const unLogin = () => {
  localStorage.removeItem(KEYS.Authorization)
  localStorage.removeItem(KEYS.username)
}
