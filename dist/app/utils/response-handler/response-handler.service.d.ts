import { Response } from 'express';
export declare class ResponseHandlerService {
    success(res: Response, message: String, body: any, others: any): any;
    ok(res: Response, message: String, body: any): any;
    notFound(res: any, Response: any, message: String, body: any): any;
}
