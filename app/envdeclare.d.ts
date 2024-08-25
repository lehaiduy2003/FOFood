/// <reference types="node" />
/// <reference types="react" />
declare namespace NodeJS {
  export interface ProcessEnv {
    AUTH_GOOGLE_ID: string;
    AUTH_GOOGLE_SECRET: string;
    NEXT_PUBLIC_HOSTNAME: string;
    NEXT_PUBLIC_PORT: string;
    NEXT_PUBLIC_API_KEY: string;
    // Declare other environment variables as needed
  }
}
