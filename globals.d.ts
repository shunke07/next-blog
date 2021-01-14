/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly CMS_API_KEY: string;
    readonly CMS_ENDPOINT: string;
  }
}
