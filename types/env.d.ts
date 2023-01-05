export interface ImportMetaEnv {
  readonly APP_NAME: string
  readonly VITE_LEGACY: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
