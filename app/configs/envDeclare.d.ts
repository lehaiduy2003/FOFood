// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace NodeJS {
    export interface ProcessEnv {
        GOOGLE_CLIENT_ID: string;
        // Add other environment variables as needed
    }
}