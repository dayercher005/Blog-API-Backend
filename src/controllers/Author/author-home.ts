import type { Request, Response } from 'express';

export function renderHomepage(req: Request, res: Response){
    res.json({
        message: 'message'
    })
}