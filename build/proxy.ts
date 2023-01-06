import type { ProxyOptions } from 'vite'

export type ProxyItem = [string, string]

export type ProxyList = Array<ProxyItem>

type ProxyTargetList = Record<string, ProxyOptions>

const httpsReg = /^https:\/\//

export const createProxy = (list: ProxyList = []) => {
  const ret: ProxyTargetList = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {})
    }
  }
  return ret
}
