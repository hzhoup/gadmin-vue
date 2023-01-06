export interface ImportMetaEnv {
  readonly APP_NAME: string

  readonly VITE_PORT: number
  readonly VITE_PROXY: Array<ProxyList>
  readonly VITE_LEGACY: boolean
  readonly VITE_BUILD_COMPRESSION: string
  readonly VITE_COMPRESSION_DELETE_ORIGIN_FILE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
