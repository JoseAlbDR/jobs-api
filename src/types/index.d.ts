export {};

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
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
    }
  }
}
