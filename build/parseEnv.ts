import { ImportMetaEnv } from '../types/env'

export const parseEnv = (env: Record<string, string>): ImportMetaEnv => {
  const temp = {}
  for (const key of Object.keys(env)) {
    let value = env[key].replace(/\\n/g, '\n')
    if (value === 'true' || value === 'false') {
      temp[key] = value === 'true' ? true : false
    } else if (/^\d+$/.test(value)) {
      temp[key] = Number(value)
    } else if (value === 'null') {
      temp[key] = null
    } else if (value === 'undefined') {
      temp[key] = undefined
    } else if (key === 'VITE_PROXY' && value) {
      try {
        temp[key] = JSON.parse(value.replace(/'/g, '"'))
      } catch (error) {
        temp[key] = []
      }
    } else {
      temp[key] = value
    }
  }
  return temp as ImportMetaEnv
}
