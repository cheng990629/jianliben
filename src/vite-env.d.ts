/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXPORT_API?: string;
  /** Playwright 抓取用的前端地址，默认 http://127.0.0.1:5173（与 vite.config 对齐） */
  readonly VITE_EXPORT_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
