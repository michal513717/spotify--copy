declare namespace NodeJS {
    interface ProccessEnv {
        NODE_ENV: "development" | "production";
        readonly VITE_DEV_SERVER_HOST: string;
        readonly VITE_DEV_SERVER_PORT: string;
    }
}