import * as express from 'express';
export declare const getRouter: (serviceUrl: string, botUrl: string, conversationInitRequired?: boolean) => express.Router;
export declare const initializeRoutes: (app: express.Express, port: number, botUrl: string, conversationInitRequired?: boolean) => Promise<void>;
