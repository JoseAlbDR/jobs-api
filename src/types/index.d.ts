export {};

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        username: string;
      };
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
      JWT_LIFETIME: string;
    }
  }
}
