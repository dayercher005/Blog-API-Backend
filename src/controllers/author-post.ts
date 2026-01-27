import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import type { ValidationChain } from 'express-validator';

const validatePostForm: (ValidationChain | RequestHandler)[] = [
    body("")
]

export async function renderPostForm(req: Request, res: Response){
    res.json({

    })
}

export async function sendPostForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(404).json({
            error: "Error"
        })
    }
}