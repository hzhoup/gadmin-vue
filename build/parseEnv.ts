import { ImportMetaEnv } from '../types/env'

export const parseEnv = (env: Record<string, string>): ImportMetaEnv => {
  const temp = {}
  for (const key in env) {
    if (Object.prototype.hasOwnProperty.call(env, key)) {
      const value = env[key]
      if (value === 'true' || value === 'false') temp[key] = value === 'true' ? true : false
      else if (/^\d+$/.test(value)) temp[key] = Number(value)
      else if (value === 'null') temp[key] = null
      else if (value === 'undefined') temp[key] = undefined
      else temp[key] = value
    }
  }
  return temp as ImportMetaEnv
}
