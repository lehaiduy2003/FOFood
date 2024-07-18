/// <reference types="node" />
/// <reference types="react" />
declare namespace NodeJS {
  export interface ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    HOSTNAME: string;
    PORT: number;
    NEXT_PUBLIC_API_KEY: string;
    // Add other environment variables as needed
  }
}
