/*
 * @Author: saber2pr
 * @Date: 2020-02-03 15:03:21
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2020-02-03 15:03:21
 */
import { KEYS } from "./KEYS"

type Option = {
  param?: object
  method?: string
  headers?: HeadersInit
  body?: string
}
export const request = async <T>(url: string, option?: Option): Promise<T> => {
  let _option: Option = {
    param: {},
    method: "GET",
    headers: {
      Authorization: localStorage.getItem(KEYS.Authorization)
    }
  }

  if (option) {
    Object.assign(_option, option)
  }

  const search = new URLSearchParams(Object.entries(_option.param)).toString()

  const res = await fetch(`${url}?${search}`, {
    headers: _option.headers,
    method: _option.method,
    body: _option.body
  })

  return res.json()
}
