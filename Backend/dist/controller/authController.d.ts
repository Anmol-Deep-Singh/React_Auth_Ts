import { type Request, type Response } from 'express';
declare const signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { signin, signup };
//# sourceMappingURL=authController.d.ts.map